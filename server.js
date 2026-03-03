const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8769;
const DIR = path.dirname(__filename);

http.createServer((req, res) => {
  const filePath = path.join(DIR, req.url === '/' ? 'shopping-list.html' : req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    }
  });
}).listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
