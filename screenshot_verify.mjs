import { chromium } from 'playwright';

const BASE = 'http://localhost:8080';
const SCREENSHOTS = '/home/z/my-project/download/screenshots-enhanced';

const viewports = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 },
};

const pages = [
  { name: 'homepage', url: '/en/' },
  { name: 'homepage-fr', url: '/fr/' },
  { name: 'services', url: '/en/services/' },
  { name: 'window-cleaning', url: '/en/services/window-cleaning/' },
  { name: 'contact', url: '/en/contact/' },
  { name: 'about', url: '/en/about/' },
  { name: 'area-kanata-window', url: '/en/area/kanata/window-cleaning/' },
  { name: '404', url: '/en/nonexistent-page-test/' },
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  
  const results = [];
  
  for (const [device, viewport] of Object.entries(viewports)) {
    for (const page of pages) {
      const tab = await context.newPage();
      await tab.setViewportSize(viewport);
      
      try {
        const response = await tab.goto(`${BASE}${page.url}`, { 
          waitUntil: 'networkidle', 
          timeout: 15000 
        });
        
        if (response && response.status() === 404 && page.name !== '404') {
          console.log(`SKIP ${device}/${page.name} - 404`);
          await tab.close();
          continue;
        }
        
        // Wait for fonts to load
        await tab.waitForTimeout(1000);
        
        const filename = `${page.name}_${device}.png`;
        await tab.screenshot({ 
          path: `${SCREENSHOTS}/${filename}`, 
          fullPage: true 
        });
        
        results.push({ page: page.name, device, status: 'captured' });
        console.log(`✓ ${device}/${page.name}`);
      } catch (err) {
        results.push({ page: page.name, device, status: 'error', error: err.message });
        console.log(`✗ ${device}/${page.name}: ${err.message}`);
      }
      
      await tab.close();
    }
  }
  
  // Responsive verification checks
  console.log('\n--- Responsive Verification ---');
  const verifyPage = await context.newPage();
  
  // Test desktop nav visibility at different breakpoints
  for (const bp of [
    { name: '375px mobile', width: 375 },
    { name: '640px small', width: 640 },
    { name: '768px tablet', width: 768 },
    { name: '1024px desktop', width: 1024 },
    { name: '1440px wide', width: 1440 },
  ]) {
    await verifyPage.setViewportSize({ width: bp.width, height: 900 });
    await verifyPage.goto(`${BASE}/en/`, { waitUntil: 'networkidle', timeout: 10000 });
    
    const desktopNav = await verifyPage.$('nav[aria-label="Main navigation"]');
    const mobileToggle = await verifyPage.$('#mobile-menu-toggle');
    const stickyCTA = await verifyPage.$('.fixed.bottom-0');
    
    const desktopNavVisible = desktopNav ? await desktopNav.isVisible() : false;
    const mobileToggleVisible = mobileToggle ? await mobileToggle.isVisible() : false;
    const stickyCTAVisible = stickyCTA ? await stickyCTA.isVisible() : false;
    
    console.log(`${bp.name}: Desktop nav=${desktopNavVisible}, Mobile toggle=${mobileToggleVisible}, Bottom CTA=${stickyCTAVisible}`);
  }
  
  // Accessibility checks
  console.log('\n--- Accessibility Verification ---');
  await verifyPage.setViewportSize({ width: 1440, height: 900 });
  await verifyPage.goto(`${BASE}/en/`, { waitUntil: 'networkidle', timeout: 10000 });
  
  // Check viewport-fit=cover
  const viewportMeta = await verifyPage.$('meta[name="viewport"]');
  const viewportContent = viewportMeta ? await viewportMeta.getAttribute('content') : '';
  console.log(`viewport-fit=cover: ${viewportContent?.includes('viewport-fit=cover') ? 'YES' : 'NO'}`);
  
  // Check skip link
  const skipLink = await verifyPage.$('a[href="#main-content"]');
  console.log(`Skip link: ${skipLink ? 'YES' : 'NO'}`);
  
  // Check duplicate skip links
  const allSkipLinks = await verifyPage.$$('a[href="#main-content"]');
  console.log(`Skip link count: ${allSkipLinks.length} (should be 1)`);
  
  // Check main has bottom padding for mobile CTA
  const mainEl = await verifyPage.$('#main-content');
  const mainClasses = mainEl ? await mainEl.getAttribute('class') : '';
  console.log(`Main bottom padding: ${mainClasses?.includes('pb-16') ? 'YES' : 'NO'}`);
  
  // Check aria-expanded on desktop nav
  const dropdownTrigger = await verifyPage.$('a[aria-haspopup="true"]');
  console.log(`Dropdown aria-haspopup: ${dropdownTrigger ? 'YES' : 'NO'}`);
  
  // Check focus-visible styles
  const focusStyles = await verifyPage.evaluate(() => {
    const el = document.createElement('a');
    document.body.appendChild(el);
    const styles = window.getComputedStyle(el, ':focus-visible');
    const result = styles.outline;
    document.body.removeChild(el);
    return result;
  });
  console.log(`:focus-visible outline: ${focusStyles !== 'none' ? 'YES' : 'NO'}`);
  
  // Check text-wrap: balance on headings
  const h1Balance = await verifyPage.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1 ? window.getComputedStyle(h1).textWrap : 'N/A';
  });
  console.log(`H1 text-wrap: ${h1Balance}`);
  
  await verifyPage.close();
  await browser.close();
  
  console.log(`\nTotal screenshots: ${results.filter(r => r.status === 'captured').length}`);
  console.log(`Errors: ${results.filter(r => r.status === 'error').length}`);
}

run().catch(console.error);
