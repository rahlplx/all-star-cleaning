import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT = '/home/z/my-project/download/audit-screenshots-after';
const DIST = '/home/z/my-project/all-star-cleaning/dist';

const viewports = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 }
};

const templates = [
  { id: 'T1', name: 'homepage', file: 'en/index.html' },
  { id: 'T2', name: 'about', file: 'en/about/index.html' },
  { id: 'T3', name: 'contact', file: 'en/contact/index.html' },
  { id: 'T4', name: 'reviews', file: 'en/reviews/index.html' },
  { id: 'T5', name: 'privacy', file: 'en/privacy/index.html' },
  { id: 'T6', name: 'services-index', file: 'en/services/index.html' },
  { id: 'T7', name: 'service-detail', file: 'en/services/gutter-cleaning/index.html' },
  { id: 'T8', name: 'location-service', file: 'en/area/arnprior/gutter-cleaning/index.html' },
  { id: 'T9', name: '404', file: '404.html' }
];

(async () => {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  let total = 0;
  const results = [];

  for (const [vpName, vp] of Object.entries(viewports)) {
    const context = await browser.newContext({
      viewport: vp,
      deviceScaleFactor: 2,
      locale: 'en-US'
    });
    const page = await context.newPage();

    for (const template of templates) {
      const filePath = path.join(DIST, template.file);
      if (!fs.existsSync(filePath)) {
        console.log(`  SKIP ${template.id}: not found`);
        continue;
      }
      
      const fileUrl = `file://${filePath}`;
      const filename = `${template.id}-${template.name}-${vpName}.png`;
      const filepath = path.join(OUT, vpName, filename);

      try {
        await page.goto(fileUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await page.waitForTimeout(1500);
        await page.screenshot({ path: filepath, fullPage: true });
        total++;
        results.push({ template: template.id, viewport: vpName, status: 'ok' });
        console.log(`✓ ${filename}`);
      } catch (err) {
        console.error(`✗ ${template.id}-${vpName}: ${err.message.slice(0, 60)}`);
        results.push({ template: template.id, viewport: vpName, status: 'error' });
      }
    }

    await context.close();
  }

  await browser.close();

  const manifest = { generatedAt: new Date().toISOString(), totalScreenshots: total, results };
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\nDone! ${total} post-fix screenshots saved`);
})();
