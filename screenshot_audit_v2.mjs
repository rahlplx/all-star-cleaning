import { chromium } from 'playwright';

const BASE = 'http://21.0.17.155:4321';
const OUT_DIR = '/home/z/my-project/download/screenshots-v2';

// Template pages to capture at 3 viewports
const templates = [
  { name: 'T1-homepage', path: '/en/' },
  { name: 'T2-about', path: '/en/about' },
  { name: 'T3-contact', path: '/en/contact' },
  { name: 'T4-reviews', path: '/en/reviews' },
  { name: 'T5-privacy', path: '/en/privacy' },
  { name: 'T6-services-index', path: '/en/services' },
  { name: 'T7-service-detail', path: '/en/services/window-cleaning' },
  { name: 'T8-location-service', path: '/en/area/barrhaven/window-cleaning' },
  { name: 'T9-404', path: '/en/nonexistent-page-test' },
];

const viewports = [
  { label: 'mobile', width: 375, height: 812 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'desktop', width: 1440, height: 900 },
];

(async () => {
  const browser = await chromium.launch({ 
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true 
  });

  const fs = await import('fs/promises');
  await fs.mkdir(OUT_DIR, { recursive: true });

  let total = 0;
  const totalExpected = templates.length * viewports.length;

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    for (const tmpl of templates) {
      const url = `${BASE}${tmpl.path}`;
      const filename = `${tmpl.name}_${vp.label}.png`;
      const filepath = `${OUT_DIR}/${filename}`;

      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
        // Wait for animations
        await page.waitForTimeout(500);
        // Full page screenshot
        await page.screenshot({ path: filepath, fullPage: true });
        console.log(`✅ ${filename}`);
      } catch (err) {
        console.error(`❌ ${filename}: ${err.message}`);
        // Try viewport-only screenshot as fallback
        try {
          await page.screenshot({ path: filepath });
          console.log(`⚠️  ${filename} (viewport only)`);
        } catch (e2) {
          console.error(`❌ ${filename} FAILED completely: ${e2.message}`);
        }
      }
      total++;
    }

    await context.close();
  }

  await browser.close();
  console.log(`\n📸 Done: ${total}/${totalExpected} screenshots saved to ${OUT_DIR}`);
})();
