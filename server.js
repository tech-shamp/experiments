const express = require("express");
const path = require("path");

const app = express();
let initialPath = path.join(__dirname, "public");
const port = process.env.PORT || 999;

app.use(express.static(initialPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});
app.get("/blog", (req, res) => {
  res.sendFile(path.join(initialPath, "blog.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(initialPath, "contact.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(initialPath, "about.html"));
});

app.use((req, res) => res.sendFile(path.join(initialPath, "404.html")));

app.listen(port, () => console.log("listening......."));
