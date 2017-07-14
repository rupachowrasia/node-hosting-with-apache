var http = require('http');
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Node.js is running form site1.\n');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');