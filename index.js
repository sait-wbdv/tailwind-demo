import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "index.html"));
  } catch (error) {
    res.status(500).send("Internal Server Error");
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
