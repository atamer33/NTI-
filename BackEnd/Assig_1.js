const http = require("http");
const fs = require("fs");
const path = require("path");




const server = http.createServer((req, res) => {
   console.log(req.method, req.url);
  let filePath;
  
    if (req.url === "/home") {
    filePath = path.join(__dirname, "views", "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "views", "about.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "views","contact.html");
  } else { 
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 - Page Not Found</h1>");
      res.end();
      return;
  }

    fs.readFile(filePath,"utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.write("<h1>500 - Internal Server Error</h1>");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }

    });
});


/*
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>500 - Could not read file</h1>");
      
    } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(data);

     }
  });
});
*/

server.listen(3000, () => {
  console.log("Server is Up and Running on Port 3000");
});


