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
app.use(async (req, res) => {
  try {
    const data = await fs.readFile("404.html", "utf8");
    res.status(404).type("html").send(data);
  } catch (err) {
    res.status(404).send("404 - Page Not Found");
  }
});

app.listen(PORT, () => {
  console.log(`node server started at http://localhost:${PORT}`);
});
