const { chromium } = require('playwright');
const fs = require('fs');

const AUDIT_DIR = '/home/z/my-project/download/audit';
const BASE_URL = 'http://127.0.0.1:9988';

const pages = [
  { name: 'en-home', url: '/en/' },
  { name: 'fr-home', url: '/fr/' },
  { name: 'en-service-window', url: '/en/services/window-cleaning/' },
  { name: 'en-area-kanata-window', url: '/en/area/kanata/window-cleaning/' },
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

async function audit() {
  const browser = await chromium.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] 
  });

  const results = [];

  for (const pageInfo of pages) {
    for (const vp of viewports) {
      const screenshotName = `${pageInfo.name}-${vp.name}-${vp.width}x${vp.height}.png`;
      const screenshotPath = `${AUDIT_DIR}/${screenshotName}`;
      
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await context.newPage();
      
      const result = {
        page: pageInfo.name,
        url: pageInfo.url,
        viewport: `${vp.name} (${vp.width}x${vp.height})`,
        screenshot: screenshotName,
        issues: [],
        checks: {},
      };

      try {
        const response = await page.goto(`${BASE_URL}${pageInfo.url}`, { waitUntil: 'networkidle', timeout: 30000 });
        result.checks['Page loads'] = response?.status() === 200 ? 'PASS' : `FAIL (${response?.status()})`;
        
        await page.waitForTimeout(1000);
        
        // Full page screenshot
        await page.screenshot({ path: screenshotPath, fullPage: true });
        result.checks['Screenshot taken'] = 'PASS';
        
        // ---- Check TopBar ----
        try {
          const topBar = await page.$('[data-topbar], .top-bar, .TopBar, header + div, [class*="topbar"], [class*="top-bar"]');
          if (topBar) {
            const topBarText = await topBar.textContent();
            result.checks['TopBar exists'] = 'PASS';
            result.checks['TopBar has phone'] = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(topBarText) ? 'PASS' : 'WARN - no phone number found';
            result.checks['TopBar has hours'] = /mon|tue|wed|thu|fri|sat|sun|am|pm|\d{1,2}:\d{2}/i.test(topBarText) ? 'PASS' : 'WARN - no hours found';
          } else {
            // Try checking the very first visible text in the page
            const bodyText = await page.evaluate(() => {
              const firstEl = document.querySelector('body > *:first-child');
              return firstEl ? firstEl.textContent.substring(0, 500) : '';
            });
            if (/\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(bodyText)) {
              result.checks['TopBar exists'] = 'PASS (phone found in first element)';
            } else {
              result.checks['TopBar exists'] = 'WARN - could not locate TopBar element';
            }
          }
        } catch (e) {
          result.checks['TopBar exists'] = `ERROR: ${e.message.substring(0, 80)}`;
        }

        // ---- Check Header/Nav ----
        try {
          const header = await page.$('header, [class*="Header"], [class*="header"], nav');
          if (header) {
            result.checks['Header exists'] = 'PASS';
            const logo = await header.$('img, svg, [class*="logo"], [class*="Logo"]');
            result.checks['Header has logo'] = logo ? 'PASS' : 'WARN - no logo found';
            
            // Desktop nav links
            if (vp.name === 'desktop') {
              const navLinks = await header.$$('a');
              result.checks['Desktop nav links'] = navLinks.length > 2 ? `PASS (${navLinks.length} links)` : 'WARN - few nav links';
            }
            
            // Mobile hamburger
            if (vp.name === 'mobile') {
              const hamburger = await header.$('button, [class*="hamburger"], [class*="menu"], [class*="burger"], [aria-label*="menu" i], [aria-label*="navigation" i]');
              result.checks['Mobile hamburger'] = hamburger ? 'PASS' : 'WARN - no hamburger button found';
            }
          } else {
            result.checks['Header exists'] = 'FAIL - no header element';
          }
        } catch (e) {
          result.checks['Header exists'] = `ERROR: ${e.message.substring(0, 80)}`;
        }

        // ---- Check Footer ----
        try {
          const footer = await page.$('footer, [class*="Footer"], [class*="footer"]');
          if (footer) {
            result.checks['Footer exists'] = 'PASS';
            const footerText = await footer.textContent();
            result.checks['Footer has phone'] = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(footerText) ? 'PASS' : 'WARN - no phone found';
            result.checks['Footer has email'] = /[\w.-]+@[\w.-]+\.\w+/.test(footerText) ? 'PASS' : 'WARN - no email found';
            result.checks['Footer has address'] = /street|st\.|ave|road|rd|blvd|drive|dr|ottawa|kanata|barrhaven|orleans/i.test(footerText) ? 'PASS' : 'WARN - no address found';
            result.checks['Footer has hours'] = /mon|tue|wed|thu|fri|sat|sun|am|pm|\d{1,2}:\d{2}/i.test(footerText) ? 'PASS' : 'WARN - no hours found';
          } else {
            result.checks['Footer exists'] = 'FAIL - no footer element';
          }
        } catch (e) {
          result.checks['Footer exists'] = `ERROR: ${e.message.substring(0, 80)}`;
        }

        // ---- Check for layout issues ----
        try {
          const overflowInfo = await page.evaluate(() => {
            const body = document.body;
            const html = document.documentElement;
            const hasHorizontalOverflow = html.scrollWidth > html.clientWidth;
            const bodyOverflow = body.scrollWidth > body.clientWidth;
            
            // Check for elements extending beyond viewport
            const allElements = document.querySelectorAll('*');
            const overflowing = [];
            for (const el of allElements) {
              const rect = el.getBoundingClientRect();
              if (rect.width > html.clientWidth + 2 && rect.width < 9999) {
                overflowing.push({
                  tag: el.tagName,
                  class: el.className?.toString()?.substring(0, 60),
                  width: Math.round(rect.width),
                  right: Math.round(rect.right),
                });
              }
            }
            
            return {
              hasHorizontalOverflow,
              bodyOverflow,
              viewportWidth: html.clientWidth,
              documentWidth: html.scrollWidth,
              overflowingElements: overflowing.slice(0, 10),
            };
          });
          
          result.checks['No horizontal overflow'] = !overflowInfo.hasHorizontalOverflow ? 'PASS' : 
            `WARN - document wider than viewport (${overflowInfo.documentWidth}px vs ${overflowInfo.viewportWidth}px)`;
          
          if (overflowInfo.overflowingElements.length > 0) {
            result.issues.push(`Overflowing elements: ${JSON.stringify(overflowInfo.overflowingElements)}`);
          }
        } catch (e) {
          result.checks['No horizontal overflow'] = `ERROR: ${e.message.substring(0, 80)}`;
        }

        // ---- Check sticky bottom CTA on mobile ----
        if (vp.name === 'mobile') {
          try {
            const stickyCTA = await page.$('[class*="sticky"], [class*="fixed-bottom"], [class*="bottom-cta"], [class*="BottomCta"], [style*="fixed"]');
            result.checks['Sticky bottom CTA (mobile)'] = stickyCTA ? 'PASS' : 'WARN - no sticky bottom CTA found';
          } catch (e) {
            result.checks['Sticky bottom CTA (mobile)'] = `ERROR: ${e.message.substring(0, 80)}`;
          }
        }

        // ---- Check USP cards on homepage ----
        if (pageInfo.name.includes('home')) {
          try {
            const uspCards = await page.$$('[class*="usp"], [class*="Usp"], [class*="feature"], [class*="Feature"], [class*="benefit"], [class*="Benefit"]');
            result.checks['USP cards'] = uspCards.length > 0 ? `PASS (${uspCards.length} found)` : 'WARN - no USP/feature/benefit cards found';
          } catch (e) {
            result.checks['USP cards'] = `ERROR: ${e.message.substring(0, 80)}`;
          }
        }

        // ---- Check service cards ----
        if (pageInfo.name.includes('home')) {
          try {
            const serviceCards = await page.$$('[class*="service-card"], [class*="ServiceCard"], [class*="service-card"], a[href*="/services/"]');
            const serviceLinks = await page.$$('a[href*="/services/"]');
            result.checks['Service cards/links'] = serviceLinks.length > 0 ? `PASS (${serviceLinks.length} service links)` : 'WARN - no service cards/links found';
          } catch (e) {
            result.checks['Service cards/links'] = `ERROR: ${e.message.substring(0, 80)}`;
          }
        }

        // ---- Check for console errors ----
        const consoleErrors = [];
        page.on('console', msg => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text().substring(0, 100));
          }
        });
        // Reload to catch console errors
        await page.reload({ waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
        await page.waitForTimeout(2000);
        result.checks['No console errors'] = consoleErrors.length === 0 ? 'PASS' : `WARN - ${consoleErrors.length} console errors`;
        if (consoleErrors.length > 0) {
          result.issues.push(`Console errors: ${consoleErrors.slice(0, 5).join('; ')}`);
        }

        // ---- Check for broken images ----
        try {
          const brokenImages = await page.evaluate(async () => {
            const imgs = document.querySelectorAll('img');
            const broken = [];
            for (const img of imgs) {
              if (img.naturalWidth === 0 && img.complete) {
                broken.push({ src: img.src?.substring(0, 80), alt: img.alt?.substring(0, 40) });
              }
            }
            return broken;
          });
          result.checks['No broken images'] = brokenImages.length === 0 ? 'PASS' : `WARN - ${brokenImages.length} broken images`;
          if (brokenImages.length > 0) {
            result.issues.push(`Broken images: ${JSON.stringify(brokenImages.slice(0, 5))}`);
          }
        } catch (e) {
          result.checks['No broken images'] = `ERROR: ${e.message.substring(0, 80)}`;
        }

        // ---- Viewport-specific: take top-of-page screenshot for header visibility ----
        const topScreenshotName = `${pageInfo.name}-${vp.name}-${vp.width}x${vp.height}-top.png`;
        await page.screenshot({ path: `${AUDIT_DIR}/${topScreenshotName}`, clip: { x: 0, y: 0, width: vp.width, height: Math.min(vp.height, 500) } });
        
        // ---- Scroll to bottom for footer screenshot ----
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);
        const footerScreenshotName = `${pageInfo.name}-${vp.name}-${vp.width}x${vp.height}-footer.png`;
        const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
        await page.screenshot({ path: `${AUDIT_DIR}/${footerScreenshotName}`, clip: { x: 0, y: Math.max(0, scrollHeight - 600), width: vp.width, height: 600 } });

      } catch (e) {
        result.checks['Page loads'] = `ERROR: ${e.message.substring(0, 120)}`;
      }

      await context.close();
      results.push(result);
      console.log(`✓ ${pageInfo.name} @ ${vp.name} (${vp.width}x${vp.height})`);
    }
  }

  await browser.close();
  
  // Write results
  fs.writeFileSync(`${AUDIT_DIR}/audit-results.json`, JSON.stringify(results, null, 2));
  console.log('\nAudit complete! Results saved to audit-results.json');
  
  // Print summary
  console.log('\n===== AUDIT SUMMARY =====\n');
  for (const r of results) {
    console.log(`\n--- ${r.page} @ ${r.viewport} ---`);
    for (const [check, status] of Object.entries(r.checks)) {
      const icon = status.startsWith('PASS') ? '✅' : status.startsWith('WARN') ? '⚠️' : status.startsWith('FAIL') ? '❌' : '❓';
      console.log(`  ${icon} ${check}: ${status}`);
    }
    if (r.issues.length > 0) {
      console.log('  🐛 Issues:');
      r.issues.forEach(i => console.log(`    - ${i}`));
    }
  }
}

audit().catch(e => {
  console.error('Audit failed:', e);
  process.exit(1);
});
