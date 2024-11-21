"use strict";

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(5500, () => {
  console.log("Server listening on 5500");
});
