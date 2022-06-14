const routehandler = (req,res) => {
const url = req.url;
const method = req.method;
if(url==='/')
{res.write('<html>');
res.write('<head><title>Enter Message</title><head>');
res.write('<h1>Hello Welcome to website</h1>');
res.write('</html>');
return res.end();
}

};