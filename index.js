import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello there");
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
