var http = require('http');
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Node.js is running form site2.\n');
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');