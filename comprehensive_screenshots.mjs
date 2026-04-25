import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT = '/home/z/my-project/download/audit-screenshots';
const DIST = '/home/z/my-project/all-star-cleaning/dist';

const viewports = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 }
};

// All 8 templates + 404 - corrected paths
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
        console.log(`  SKIP ${template.id}: ${filePath} not found`);
        results.push({ template: template.id, name: template.name, viewport: vpName, status: 'skip', error: 'file not found' });
        continue;
      }
      
      const fileUrl = `file://${filePath}`;
      const filename = `${template.id}-${template.name}-${vpName}.png`;
      const filepath = path.join(OUT, vpName, filename);

      try {
        console.log(`Capturing ${template.id} ${template.name} @ ${vpName}...`);
        await page.goto(fileUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await page.waitForTimeout(1500);
        
        await page.screenshot({ path: filepath, fullPage: true });
        
        total++;
        results.push({ template: template.id, name: template.name, viewport: vpName, file: filepath, status: 'ok' });
        console.log(`  ✓ ${filename}`);
      } catch (err) {
        console.error(`  ✗ ${template.id}-${vpName}: ${err.message.slice(0, 80)}`);
        results.push({ template: template.id, name: template.name, viewport: vpName, status: 'error', error: err.message.slice(0, 200) });
      }
    }

    await context.close();
  }

  await browser.close();

  const manifest = { generatedAt: new Date().toISOString(), totalScreenshots: total, templates: templates.length, viewports: Object.keys(viewports), results };
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\nDone! ${total} screenshots saved to ${OUT}`);
})();
