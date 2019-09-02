const express = require("express");
const router = express.Router();
const { requireOwnerSignin } = require("../controllers/auth-owner");
const { read, create, busBySlug } = require("../controllers/bus");

router.post("/add", requireOwnerSignin, create);
router.post("/:slug", read);

router.param("slug", busBySlug);

module.exports = router;
