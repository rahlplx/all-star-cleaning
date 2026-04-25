import { chromium } from 'playwright';
import { createServer } from 'http';
import { stat, readFile } from 'fs/promises';
import { join, extname } from 'path';

const DIST_DIR = '/home/z/my-project/all-star-cleaning/dist';
const OUT_DIR = '/home/z/my-project/download/screenshots-v2';
const PORT = 9876;

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.json': 'application/json', '.xml': 'application/xml',
  '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

// Start static file server
const server = createServer(async (req, res) => {
  try {
    let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
    // Try .html extension for clean URLs
    try { await stat(filePath); } catch { filePath += '/index.html'; }
    try { await stat(filePath); } catch { filePath = filePath.replace(/\/index\.html$/, '.html'); }
    
    const data = await readFile(filePath);
    const ct = MIME[extname(filePath)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': ct });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

await new Promise(r => server.listen(PORT, '127.0.0.1', r));
console.log(`Static server on http://127.0.0.1:${PORT}`);

const BASE = `http://127.0.0.1:${PORT}`;

const templates = [
  { name: 'T1-homepage', path: '/en/' },
  { name: 'T2-about', path: '/en/about/' },
  { name: 'T3-contact', path: '/en/contact/' },
  { name: 'T4-reviews', path: '/en/reviews/' },
  { name: 'T5-privacy', path: '/en/privacy/' },
  { name: 'T6-services-index', path: '/en/services/' },
  { name: 'T7-service-detail', path: '/en/services/window-cleaning/' },
  { name: 'T8-location-service', path: '/en/area/barrhaven/window-cleaning/' },
  { name: 'T9-404', path: '/en/nonexistent-page-test' },
];

const viewports = [
  { label: 'mobile', width: 375, height: 812 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'desktop', width: 1440, height: 900 },
];

const { mkdir } = await import('fs/promises');
await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  headless: true,
});

let success = 0, fail = 0;

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
      await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(800);
      await page.screenshot({ path: filepath, fullPage: true });
      console.log(`✅ ${filename}`);
      success++;
    } catch (err) {
      console.error(`❌ ${filename}: ${err.message.split('\n')[0]}`);
      fail++;
    }
  }

  await context.close();
}

await browser.close();
server.close();
console.log(`\n📸 Done: ${success} success, ${fail} fail — saved to ${OUT_DIR}`);
