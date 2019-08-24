const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");

router.get("/:userId", userById);
module.exports = router;