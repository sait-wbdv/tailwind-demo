"use strict";
const path = require("node:path");
const express = require("express");

const app = express();
const port = 3000;

app.use("/assets", express.static(path.join(__dirname, "/assets")));
const options = {
  root: path.join(__dirname, "public"),
};
app.get("/", (req, res, next) => {
  try {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    res.sendFile("index.html", options);
  } catch (err) {
    next(err);
  }
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", options);
});

app.use((req, res, next) => {
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
