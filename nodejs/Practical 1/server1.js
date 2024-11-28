const { createServer } = require('node:http');

const hostname = '127.0.0.2';
const port = 8000;

const server = createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'image');
  res.end('https://letsenhance.io/');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});