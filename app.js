// const cors = require("cors");
// const express = require("express");
// const app = express();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json());

// // ROUTES
// app.get("/", (req, res) => {
//   res.send("Welcome to Artemis");
// });

// const artemisController = require("./controllers/artemisController.js"); 
// app.use("/pets", artemisController);

// // 404 PAGE
// app.get("*", (req, res) => {
//   res.status(404).send("Page not found");
// });

// // EXPORT
// module.exports = app;

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => res.send('Project Artemis!'));

// app.listen(port, () => console.log(`Express app running on port ${port}!`));

const cors = require("cors");
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Artemis!!");
});

const artemisController = require("./controllers/artemisController.js");
app.use("/pets", artemisController);


// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


module.exports = app;
