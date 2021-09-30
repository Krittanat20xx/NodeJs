//6221601096 กฤตณัฐ พรหมภัทรา
const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
  
    if (url === "/" ) {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Server</title></head>");
      res.write("<body><h1>HELLO</h1><br/><h2>Welcome to my club</h2></body>");
      res.write(
        '<body><form action ="/CreateBook" method="POST"><input type="text" name="CreateBook" /><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/books") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Server</title></head>");
      res.write(
        "<body><ul><li>Percy jackson 1</li><li>Percy jackson 2</li><li>Percy jackson 3</li></body>"
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/CreateBook" && method === "POST") {
      const bodyMsg = [];
      req.on("data", (chunk) => {
        bodyMsg.push(chunk);
      });
      return req.on("end", () => {
        const parsedBody = Buffer.concat(bodyMsg).toString();
        const msg = parsedBody.split("=")[1];
        console.log(msg);
        return res.end();
    });
  }
  });
  server.listen(3000);
  