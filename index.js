"use strict";
const path = require("node:path");
const express = require("express");

const app = express();
const port = 3000;

app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
