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

async function detailedAudit() {
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
        checks: {},
        issues: [],
      };

      try {
        // Collect console messages
        const consoleMessages = [];
        page.on('console', msg => {
          consoleMessages.push({ type: msg.type(), text: msg.text().substring(0, 150) });
        });
        
        const response = await page.goto(`${BASE_URL}${pageInfo.url}`, { waitUntil: 'networkidle', timeout: 30000 });
        result.checks['Page loads (200)'] = response?.status() === 200 ? 'PASS' : `FAIL (${response?.status()})`;
        
        await page.waitForTimeout(1500);
        
        // Full page screenshot
        await page.screenshot({ path: screenshotPath, fullPage: true });
        result.checks['Full-page screenshot'] = 'PASS';

        // ===== DETAILED DOM ANALYSIS =====
        const analysis = await page.evaluate(() => {
          const data = {
            topBar: null,
            header: null,
            footer: null,
            stickyCta: null,
            hero: null,
            uspCards: [],
            serviceCards: [],
            layout: {},
            fonts: [],
            brokenImages: [],
            overflowElements: [],
            textIssues: [],
            zStackingIssues: [],
          };

          // --- TopBar ---
          const topBarEl = document.querySelector('.navy-gradient');
          if (topBarEl) {
            const rect = topBarEl.getBoundingClientRect();
            data.topBar = {
              visible: rect.height > 0,
              height: Math.round(rect.height),
              text: topBarEl.textContent?.trim().substring(0, 200),
              hasPhone: /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(topBarEl.textContent),
              hasHours: /mon|tue|wed|thu|fri|sat|sun|am|pm|9h|19h/i.test(topBarEl.textContent),
            };
          }

          // --- Header ---
          const headerEl = document.querySelector('header');
          if (headerEl) {
            const rect = headerEl.getBoundingClientRect();
            const logoEl = headerEl.querySelector('a');
            const desktopNav = headerEl.querySelector('nav.hidden');
            const mobileToggle = headerEl.querySelector('button');
            const navLinks = headerEl.querySelectorAll('nav a, nav > div > a');
            data.header = {
              visible: rect.height > 0,
              height: Math.round(rect.height),
              width: Math.round(rect.width),
              isSticky: headerEl.classList.contains('sticky'),
              logoText: logoEl?.textContent?.trim().substring(0, 50),
              hasDesktopNav: desktopNav !== null || getComputedStyle(headerEl.querySelector('nav')).display !== 'none',
              hasMobileToggle: mobileToggle !== null,
              navLinkCount: navLinks.length,
            };
          }

          // --- Hero ---
          const heroEl = document.querySelector('section.navy-gradient, section.relative.overflow-hidden');
          if (heroEl) {
            const rect = heroEl.getBoundingClientRect();
            const h1 = heroEl.querySelector('h1');
            data.hero = {
              visible: rect.height > 0,
              height: Math.round(rect.height),
              h1Text: h1?.textContent?.trim().substring(0, 100),
              h1FontSize: h1 ? getComputedStyle(h1).fontSize : null,
            };
          }

          // --- USP Cards (section after hero with bg-off-white) ---
          const uspSection = document.querySelectorAll('section')[1]; // second section is usually USPs
          if (uspSection) {
            const cards = uspSection.querySelectorAll('.rounded-xl');
            cards.forEach(card => {
              const h3 = card.querySelector('h3');
              data.uspCards.push({
                title: h3?.textContent?.trim().substring(0, 60),
                hasIcon: card.querySelector('svg') !== null,
                width: Math.round(card.getBoundingClientRect().width),
              });
            });
          }

          // --- Service Cards ---
          const serviceSection = document.querySelectorAll('section')[2];
          if (serviceSection) {
            const serviceLinks = serviceSection.querySelectorAll('a.group');
            serviceLinks.forEach(link => {
              const h3 = link.querySelector('h3');
              data.serviceCards.push({
                title: h3?.textContent?.trim().substring(0, 60),
                width: Math.round(link.getBoundingClientRect().width),
              });
            });
          }

          // --- Footer ---
          const footerEl = document.querySelector('footer');
          if (footerEl) {
            const rect = footerEl.getBoundingClientRect();
            data.footer = {
              visible: rect.height > 0,
              height: Math.round(rect.height),
              text: footerEl.textContent?.trim().substring(0, 500),
              hasPhone: /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/.test(footerEl.textContent),
              hasEmail: /[\w.-]+@[\w.-]+\.\w+/.test(footerEl.textContent),
              hasAddress: /street|st\.|ave|road|rd|blvd|drive|dr|ottawa|kanata|barrhaven|orleans/i.test(footerEl.textContent),
              hasHours: /mon|tue|wed|thu|fri|sat|sun|am|pm|9h|19h|open|ouvert/i.test(footerEl.textContent),
              columnCount: footerEl.querySelectorAll('.grid > div').length,
              hasSocialLinks: footerEl.querySelectorAll('a[aria-label]').length > 0,
            };
          }

          // --- Sticky Bottom CTA ---
          const stickyCta = document.querySelector('.fixed.bottom-0');
          if (stickyCta) {
            const rect = stickyCta.getBoundingClientRect();
            data.stickyCta = {
              visible: rect.height > 0,
              height: Math.round(rect.height),
              bottom: Math.round(rect.bottom),
              display: getComputedStyle(stickyCta).display,
              buttonTexts: Array.from(stickyCta.querySelectorAll('a')).map(a => a.textContent?.trim()),
            };
          }

          // --- Layout & Overflow ---
          const html = document.documentElement;
          data.layout = {
            documentHeight: html.scrollHeight,
            documentWidth: html.scrollWidth,
            viewportWidth: html.clientWidth,
            viewportHeight: html.clientHeight,
            hasHorizontalOverflow: html.scrollWidth > html.clientWidth + 2,
            hasVerticalScrollbar: html.scrollHeight > html.clientHeight,
          };

          // Check for overflowing elements
          const allEls = document.querySelectorAll('*');
          for (const el of allEls) {
            const rect = el.getBoundingClientRect();
            if (rect.width > html.clientWidth + 5 && rect.width < 9999) {
              data.overflowElements.push({
                tag: el.tagName,
                id: el.id,
                class: el.className?.toString()?.substring(0, 80),
                width: Math.round(rect.width),
                right: Math.round(rect.right),
              });
            }
          }
          data.overflowElements = data.overflowElements.slice(0, 10);

          // --- Broken Images ---
          const imgs = document.querySelectorAll('img');
          for (const img of imgs) {
            if (img.naturalWidth === 0 && img.complete && img.src) {
              data.brokenImages.push({ src: img.src.substring(0, 100), alt: img.alt?.substring(0, 50) });
            }
          }

          // --- Font Loading Check ---
          const h1El = document.querySelector('h1');
          if (h1El) {
            data.fonts.push({
              element: 'h1',
              fontFamily: getComputedStyle(h1El).fontFamily,
              fontSize: getComputedStyle(h1El).fontSize,
            });
          }
          const bodyEl = document.querySelector('body');
          if (bodyEl) {
            data.fonts.push({
              element: 'body',
              fontFamily: getComputedStyle(bodyEl).fontFamily,
            });
          }

          // --- Check for z-stacking issues ---
          const fixedEls = document.querySelectorAll('[class*="fixed"], [class*="sticky"]');
          fixedEls.forEach(el => {
            const zIndex = getComputedStyle(el).zIndex;
            if (zIndex !== 'auto' && parseInt(zIndex) > 0) {
              data.zStackingIssues.push({
                tag: el.tagName,
                class: el.className?.toString()?.substring(0, 60),
                zIndex,
                position: getComputedStyle(el).position,
              });
            }
          });

          // --- Text Truncation/Overflow Issues ---
          const textEls = document.querySelectorAll('h1, h2, h3, p, span, a');
          for (const el of textEls) {
            const style = getComputedStyle(el);
            if (style.overflow === 'hidden' && style.textOverflow === 'ellipsis') {
              if (el.scrollWidth > el.clientWidth + 2) {
                data.textIssues.push({
                  tag: el.tagName,
                  text: el.textContent?.trim().substring(0, 60),
                  scrollWidth: el.scrollWidth,
                  clientWidth: el.clientWidth,
                });
              }
            }
          }

          return data;
        });

        // ===== PROCESS ANALYSIS RESULTS =====
        
        // TopBar
        if (analysis.topBar) {
          result.checks['TopBar visible'] = analysis.topBar.visible ? 'PASS' : 'FAIL';
          result.checks['TopBar has phone'] = analysis.topBar.hasPhone ? 'PASS' : 'WARN';
          result.checks['TopBar has hours'] = analysis.topBar.hasHours ? 'PASS' : 'WARN';
        } else {
          result.checks['TopBar exists'] = 'FAIL - no .navy-gradient element';
        }

        // Header
        if (analysis.header) {
          result.checks['Header visible'] = analysis.header.visible ? 'PASS' : 'FAIL';
          result.checks['Header sticky'] = analysis.header.isSticky ? 'PASS' : 'WARN';
          result.checks['Logo present'] = analysis.header.logoText ? `PASS (${analysis.header.logoText})` : 'FAIL';
          
          if (vp.name === 'mobile') {
            result.checks['Mobile hamburger'] = analysis.header.hasMobileToggle ? 'PASS' : 'FAIL';
            result.checks['Desktop nav hidden'] = !analysis.header.hasDesktopNav ? 'PASS' : 'WARN - desktop nav visible on mobile';
          }
          if (vp.name === 'desktop') {
            result.checks['Desktop nav visible'] = analysis.header.hasDesktopNav ? 'PASS' : 'FAIL';
            result.checks['Nav link count'] = analysis.header.navLinkCount > 3 ? `PASS (${analysis.header.navLinkCount} links)` : 'WARN';
          }
          if (vp.name === 'tablet') {
            result.checks['Responsive nav (tablet)'] = 'INFO - check screenshot';
          }
        } else {
          result.checks['Header exists'] = 'FAIL';
        }

        // Hero
        if (analysis.hero) {
          result.checks['Hero section'] = analysis.hero.visible ? `PASS (${analysis.hero.height}px tall)` : 'FAIL';
          result.checks['H1 text'] = analysis.hero.h1Text ? `PASS (${analysis.hero.h1Text.substring(0, 50)})` : 'FAIL';
        }

        // USP Cards
        if (analysis.uspCards.length > 0) {
          result.checks['USP cards'] = `PASS (${analysis.uspCards.length} cards)`;
          analysis.uspCards.forEach((card, i) => {
            result.checks[`USP card ${i+1}`] = `${card.title} | icon: ${card.hasIcon ? '✓' : '✗'} | ${card.width}px wide`;
          });
        } else {
          result.checks['USP cards'] = 'WARN - no USP cards detected';
          result.issues.push('USP cards not found in second section - may need to check layout');
        }

        // Service Cards
        if (analysis.serviceCards.length > 0) {
          result.checks['Service cards'] = `PASS (${analysis.serviceCards.length} cards)`;
          analysis.serviceCards.forEach((card, i) => {
            result.checks[`Service card ${i+1}`] = `${card.title} | ${card.width}px wide`;
          });
        } else {
          result.checks['Service cards'] = 'WARN - no service cards detected';
        }

        // Footer
        if (analysis.footer) {
          result.checks['Footer visible'] = analysis.footer.visible ? 'PASS' : 'FAIL';
          result.checks['Footer has phone'] = analysis.footer.hasPhone ? 'PASS' : 'FAIL';
          result.checks['Footer has email'] = analysis.footer.hasEmail ? 'PASS' : 'FAIL';
          result.checks['Footer has address'] = analysis.footer.hasAddress ? 'PASS' : 'WARN';
          result.checks['Footer has hours'] = analysis.footer.hasHours ? 'PASS' : 'WARN';
          result.checks['Footer columns'] = analysis.footer.columnCount > 0 ? `PASS (${analysis.footer.columnCount} columns)` : 'WARN';
          result.checks['Footer social links'] = analysis.footer.hasSocialLinks ? 'PASS' : 'WARN';
        } else {
          result.checks['Footer exists'] = 'FAIL';
        }

        // Sticky CTA
        if (vp.name === 'mobile') {
          if (analysis.stickyCta) {
            result.checks['Sticky bottom CTA'] = analysis.stickyCta.visible ? `PASS (${analysis.stickyCta.buttonTexts.join(' / ')})` : 'FAIL - not visible';
          } else {
            result.checks['Sticky bottom CTA'] = 'FAIL - not found';
          }
        }
        if (vp.name === 'desktop' && analysis.stickyCta) {
          result.checks['Sticky CTA hidden on desktop'] = analysis.stickyCta.display === 'none' || !analysis.stickyCta.visible ? 'PASS' : 'WARN - CTA visible on desktop';
        }

        // Layout
        result.checks['No horizontal overflow'] = !analysis.layout.hasHorizontalOverflow ? 'PASS' : `WARN - document ${analysis.layout.documentWidth}px > viewport ${analysis.layout.viewportWidth}px`;
        if (analysis.overflowElements.length > 0) {
          result.issues.push(`Overflow elements: ${JSON.stringify(analysis.overflowElements)}`);
        }

        // Broken Images
        result.checks['No broken images'] = analysis.brokenImages.length === 0 ? 'PASS' : `FAIL - ${analysis.brokenImages.length} broken images`;
        if (analysis.brokenImages.length > 0) {
          result.issues.push(`Broken images: ${JSON.stringify(analysis.brokenImages)}`);
        }

        // Fonts
        if (analysis.fonts.length > 0) {
          result.checks['Font loading'] = analysis.fonts.map(f => `${f.element}: ${f.fontFamily}`).join(' | ');
        }

        // Z-stacking
        if (analysis.zStackingIssues.length > 0) {
          result.checks['Z-stacking'] = `INFO - ${analysis.zStackingIssues.length} fixed/sticky elements`;
        }

        // Text issues
        if (analysis.textIssues.length > 0) {
          result.issues.push(`Truncated text: ${JSON.stringify(analysis.textIssues)}`);
          result.checks['No truncated text'] = `WARN - ${analysis.textIssues.length} truncated elements`;
        } else {
          result.checks['No truncated text'] = 'PASS';
        }

        // Console errors
        const errors = consoleMessages.filter(m => m.type === 'error');
        result.checks['No console errors'] = errors.length === 0 ? 'PASS' : `WARN - ${errors.length} errors`;
        if (errors.length > 0) {
          result.issues.push(`Console errors: ${errors.slice(0, 5).map(e => e.text).join('; ')}`);
        }

        // ===== ADDITIONAL SCREENSHOTS =====
        
        // Top section screenshot (header + hero)
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(300);
        await page.screenshot({ 
          path: `${AUDIT_DIR}/${pageInfo.name}-${vp.name}-top.png`, 
          clip: { x: 0, y: 0, width: vp.width, height: Math.min(500, await page.evaluate(() => window.innerHeight)) }
        });

        // USP section screenshot
        if (pageInfo.name.includes('home')) {
          const uspSectionTop = await page.evaluate(() => {
            const sections = document.querySelectorAll('section');
            if (sections[1]) {
              const rect = sections[1].getBoundingClientRect();
              return { top: rect.top + window.scrollY, height: rect.height };
            }
            return null;
          });
          if (uspSectionTop) {
            await page.evaluate((top) => window.scrollTo(0, top), uspSectionTop.top - 50);
            await page.waitForTimeout(300);
            await page.screenshot({ 
              path: `${AUDIT_DIR}/${pageInfo.name}-${vp.name}-usp.png`, 
              clip: { x: 0, y: 0, width: vp.width, height: Math.min(uspSectionTop.height + 100, 600) }
            });
          }
        }

        // Footer screenshot
        const footerTop = await page.evaluate(() => {
          const footer = document.querySelector('footer');
          if (footer) {
            const rect = footer.getBoundingClientRect();
            return { top: rect.top + window.scrollY, height: rect.height };
          }
          return null;
        });
        if (footerTop) {
          await page.evaluate((top) => window.scrollTo(0, top), footerTop.top - 50);
          await page.waitForTimeout(300);
          await page.screenshot({ 
            path: `${AUDIT_DIR}/${pageInfo.name}-${vp.name}-footer.png`, 
            fullPage: false
          });
        }

      } catch (e) {
        result.checks['Page loads'] = `ERROR: ${e.message.substring(0, 150)}`;
        result.issues.push(`Critical error: ${e.message.substring(0, 200)}`);
      }

      await context.close();
      results.push(result);
      console.log(`✓ ${pageInfo.name} @ ${vp.name} (${vp.width}x${vp.height})`);
    }
  }

  await browser.close();
  
  // Write results
  fs.writeFileSync(`${AUDIT_DIR}/detailed-audit-results.json`, JSON.stringify(results, null, 2));
  console.log('\nAudit complete! Results saved to detailed-audit-results.json');
  
  // Print summary
  console.log('\n========== DETAILED AUDIT REPORT ==========\n');
  for (const r of results) {
    console.log(`\n━━━ ${r.page} @ ${r.viewport} ━━━`);
    for (const [check, status] of Object.entries(r.checks)) {
      const icon = status.startsWith('PASS') ? '✅' : status.startsWith('WARN') ? '⚠️' : status.startsWith('FAIL') ? '❌' : status.startsWith('INFO') ? 'ℹ️' : '  ';
      console.log(`  ${icon} ${check}: ${status}`);
    }
    if (r.issues.length > 0) {
      console.log('  🐛 Issues:');
      r.issues.forEach(i => console.log(`    - ${i}`));
    }
  }
}

detailedAudit().catch(e => {
  console.error('Audit failed:', e);
  process.exit(1);
});
