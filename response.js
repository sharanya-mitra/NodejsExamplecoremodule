const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My nodepage</title></head>');
    res.write('<body><h1>Hello This is my node page</h1></body>');
    res.write('<html>');
    res.end();
});
server.listen(5050);