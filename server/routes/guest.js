const express = require("express");
const router = express.Router();
const { getAllGuests } = require("../controllers/guest");

router.get("/", getAllGuests)

module.exports = router;