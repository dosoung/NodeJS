const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/') {
    res.setHeader('Content-Type', 'Text/html');
    res.write('<html>');
    res.write('<head><title> Assignment </title></head>');
    res.write('<body><form action="/create-user" method="POST"><input type="text" name ="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  } 
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
      console.log(body);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
    });
    res.statusCode = 302;
    res.setHeader('Location', '/users');
    res.end();
  }
});


server.listen(PORT, () => {
  console.log('Running on Server');
})