const express = require("express");
const morgan = require("morgan");
require("express-async-errors");
const path = require("path");
const cors = require("cors");
const expressValidator = require("express-validator");
const {runEveryMidnight, dbConnection, errorHandler} = require("./helpers")
const app = express();
require("dotenv").config();

// Database Connection
dbConnection();

app.use(express.static('public'))

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressValidator());

// Routes
app.get("/", (req, res) => {
  res.redirect("/api/users");
});

app.use("/api/users", require("./routes/user"));
app.use("/api/owners", require("./routes/owner"));
app.use("/api/guests", require("./routes/guest"));
app.use("/api/auth-user", require("./routes/auth-user"));
app.use("/api/auth-owner", require("./routes/auth-owner"));
app.use("/api/bus", require("./routes/bus"));
app.use("/api/bookings", require("./routes/booking"));
app.use("/api/locations", require("./routes/location"));

// Error handling middleware
app.use(function(err, req, res, next) {
  return res.status(500).json({
    error: errorHandler(err) || "Something went wrong!"
  });
});


// Run every-midnight to check if bus deporting date is passed
runEveryMidnight();

const port = process.env.PORT || 8525;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
