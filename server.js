const express = require("express");
const morgan = require("morgan");
require("express-async-errors");
const path = require("path");
const cors = require("cors");
const expressValidator = require("express-validator");
const dbConnection = require("./helpers/dbConnection");
const app = express();
require("dotenv").config();

// Database Connection
dbConnection();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.redirect("/api/users");
});

app.use("/api/users", require("./routes/user"));
app.use("/api/auth-user", require("./routes/auth-user"));

// Error handling middleware
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).send("Something failed...");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});