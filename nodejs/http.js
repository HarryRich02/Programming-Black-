const http = require('node:http');

http
  .createServer((request, response) => {
    let body = [];
    request
      .on('data', chunk => {
        body.push(chunk);
      })
      .on('end', () => {
        body = Buffer.concat(body).toString();
        response.end(body);
      });
  })
  .listen(8080);
