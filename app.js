const http = require('http');

const PORT = 5050;

const server = http.createServer((req,res)=>
{
    console.log(req);
});

server.listen(PORT);
console.log(`server is running in Port ${PORT}`);