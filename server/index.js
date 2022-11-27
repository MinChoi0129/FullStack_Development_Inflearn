let http = require("http");
let hostname = "127.0.0.1";
let port = 8080;

const server = http.createServer(function (req, res) {
  console.log("REQUEST: ", req);
  res.end("HI CLIENT");
});

server.listen(port, hostname);
console.log("RUNNING SERVER");
