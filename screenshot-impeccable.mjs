import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');
import { mkdir } from 'fs/promises';

const DIST = '/home/z/my-project/all-star-cleaning/dist';
const OUT = '/home/z/my-project/download/screenshots-impeccable';
await mkdir(OUT, { recursive: true });

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  // Remove query strings
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(DIST, urlPath);
  
  // Serve index.html for directory paths
  if (filePath.endsWith('/')) {
    filePath += 'index.html';
  }
  
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found: ' + urlPath);
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(data);
  });
});

await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
const BASE = `http://127.0.0.1:${port}`;
console.log(`Server started on port ${port}`);

const pages = [
  { name: 'homepage', url: '/en/' },
  { name: 'about', url: '/en/about/' },
  { name: 'contact', url: '/en/contact/' },
  { name: 'reviews', url: '/en/reviews/' },
  { name: 'services-index', url: '/en/services/' },
  { name: 'service-detail', url: '/en/services/window-cleaning/' },
  { name: 'location-service', url: '/en/area/kanata/window-cleaning/' },
  { name: '404', url: '/404.html' },
];

const viewports = [
  { suffix: 'mobile', width: 375, height: 812 },
  { suffix: 'tablet', width: 768, height: 1024 },
  { suffix: 'desktop', width: 1440, height: 900 },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();

let shot = 0;
const results = [];

for (const page of pages) {
  for (const vp of viewports) {
    const tab = await context.newPage();
    await tab.setViewportSize({ width: vp.width, height: vp.height });
    try {
      await tab.goto(`${BASE}${page.url}`, { waitUntil: 'networkidle', timeout: 20000 });
      // Wait for fonts to load
      await tab.waitForTimeout(2000);
      const filename = `${page.name}-${vp.suffix}.png`;
      await tab.screenshot({ path: `${OUT}/${filename}`, fullPage: true });
      shot++;
      const size = fs.statSync(`${OUT}/${filename}`).size;
      results.push({ name: filename, size: Math.round(size / 1024) + 'KB', status: '✓' });
    } catch (e) {
      results.push({ name: `${page.name}-${vp.suffix}`, size: '-', status: '✗ ' + e.message.slice(0, 60) });
    }
    await tab.close();
  }
}

await browser.close();
server.close();

console.log('\n=== Screenshot Results ===');
for (const r of results) {
  console.log(`${r.status} ${r.name} (${r.size})`);
}
console.log(`\nTotal screenshots: ${shot}`);
