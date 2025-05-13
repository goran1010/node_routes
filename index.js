const express = require("express");
const { URL } = require("node:url");
const fs = require("fs/promises");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  let data = await fs.readFile("index.html", "utf8");
  res.status(200).type("html").send(data);
});
app.get("/about.html", async (req, res) => {
  let data = await fs.readFile("about.html", "utf8");
  res.status(200).type("html").send(data);
});
app.get("/contact-me.html", async (req, res) => {
  let data = await fs.readFile("contact-me.html", "utf8");
  res.status(200).type("html").send(data);
});

app.listen(PORT, () => {
  console.log(`node server started at http://localhost:${PORT}`);
});
