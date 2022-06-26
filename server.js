const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
let initialPath = path.join(__dirname, "public");
const port = process.env.PORT || 8080;

app.use(express.static(initialPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});

app.use((req, res) => res.sendFile(path.join(initialPath, "404.html")));

app.listen(port, () => console.log("listening......."));
