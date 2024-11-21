"use strict";
const path = require("node:path");
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log(`Server listening on ${3000}`);
});
