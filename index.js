"use strict";
const express = require("express");
const path = require("node:path");

const app = express();
app.use("/assets", express.static("assets"));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
