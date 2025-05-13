const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

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

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`node server started at http://localhost:${PORT}`);
});
