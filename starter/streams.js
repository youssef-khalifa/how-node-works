const fs = require("fs");
const server = require("http").createServer();
server.on("request", (req, res) => {
  //selution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  //solution 2
  // const readable = fs.createReadStream("teast-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log("Error");
  //   res.statusCode = 500;
  //   res.end("<h1>file not found</h1>");
  // });
  //solution 3

  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("started");
});
