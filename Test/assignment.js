const http = require('http');

const routes = require('./routes');

const PORT = 5000;

const server = http.createServer();
console.log(routes.running);
server.listen(PORT);

console.log(`server is running in Port ${PORT}`);