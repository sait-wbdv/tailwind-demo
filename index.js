"use strict";
const express = require("express");
const path = require("node:path");

const app = express();
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res, next) => {
  try {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    res.sendFile(path.join(__dirname, "index.html"));
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.error(`Unhandled Error: ${err}`);
  resolve.status(500).send("Internal Server Error");
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
