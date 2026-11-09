const http = require("http");


const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/nti") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello from NTI");
  } else if (req.url === "/iti") {
    res.write("<h1>This is ITI !!</h1>");
  } else {
    res.write("i found nothing !");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server is Up and Running on Port 3000");
});