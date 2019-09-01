const express = require("express");
const morgan = require("morgan");
require("express-async-errors");
const path = require("path");
const cors = require("cors");
const expressValidator = require("express-validator");
const dbConnection = require("./helpers/dbConnection");
const { errorHandler } = require("./helpers/dbErrorHandler");
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
app.use("/api/owners", require("./routes/owner"));
app.use("/api/auth-user", require("./routes/auth-user"));
app.use("/api/auth-owner", require("./routes/auth-owner"));

// Error handling middleware
app.use(function(err, req, res, next) {
  return res.status(500).json({
    error: errorHandler(err) || "Something went wrong!"
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
