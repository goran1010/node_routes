import http from "http";
import { URL } from "node:url";
import fs from "fs/promises";

async function getData(newURL, req, res) {
  try {
    let path = "." + newURL.pathname;
    if (path === "./") path = "./index.html";
    let data = await fs.readFile(path, "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  } catch (err) {
    let data = await fs.readFile("404.html", "utf8");
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  }
}

const server = http.createServer((req, res) => {
  let newURL = new URL(req.url, `http://${req.headers.host}`);
  getData(newURL, req, res);
});

server.listen(8080, () => {
  console.log("node server started at http://localhost:8080");
});
