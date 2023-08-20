const cors = require("cors");
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Artemis");
});

const artemisController = require("./controllers/artemisController.js"); // Adjust the path accordingly
app.use("/pets", artemisController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
