const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

// Local stand-in for the schedule functions in api/ (dev only: this file is never deployed).
// Memory store and TEST passcodes only - the real ones live in Vercel's settings, never here.
process.env.SCHEDULE_DEV_MEMORY = '1';
process.env.SCHEDULE_CODE_FOH = process.env.SCHEDULE_CODE_FOH || 'test-foh';
process.env.SCHEDULE_CODE_OWNER = process.env.SCHEDULE_CODE_OWNER || 'test-owner';
process.env.SCHEDULE_SECRET = process.env.SCHEDULE_SECRET || 'local-test-secret-not-for-production';
const apiHandlers = { '/api/login': './api/login.js', '/api/week': './api/week.js' };

http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  if (apiHandlers[urlPath]) { require(apiHandlers[urlPath])(req, res); return; }
  if (urlPath === '/schedule' || urlPath === '/schedule/') { res.writeHead(307, { Location: '/schedule.html' }); res.end(); return; }
  let filePath = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath).toLowerCase();
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Luca Bistro running at http://localhost:${PORT}`));
