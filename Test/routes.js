const routehandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write("<h1>Hello Welcome to website</h1>");
    res.write(
      "<p>name : <form action='/create-user' method='POST'><input type='text' name='username'></input><button type='submit'>Send</button></form></p>"
    );
    // res.write();
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write("<ul><li>Linda</li><li>Jimmy</li><li>Mike</li></ul>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {body.push(chunk);});
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
};

exports.handler = routehandler;
exports.feedback = "routes are connected succesfully";
