const routehandler = (req,res) => {
    const url = req.url;
    // const method = req.method;
    if(url==='/')
    {res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<h1>Hello Welcome to website</h1>');
    res.write('<form action='/create-user' method='POST'><input type='text' name='username'></input><button type='submit'>Send</button></form>');
    res.write('</html>');
    return res.end();
    }
    if(url==='/users')
    {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<ul><li>Linda</li><li>Jimmy</li><li>Mike</li></ul>');
    res.write('</html>');
    return res.end();
    }
    

};

exports.handler = routehandler;
exports.feedback ='routes are connected succesfully';
