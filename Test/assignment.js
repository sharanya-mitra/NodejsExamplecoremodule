const http = require('http');
const routes = require('./routes');

const PORT = 8080;

const server = http.createServer(routes.handler);
console.log(routes.running);
server.listen(PORT);
console.log(`server is running in Port ${PORT}`);
console.log(routes.feedback);