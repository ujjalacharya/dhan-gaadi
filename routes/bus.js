const express = require("express");
const router = express.Router();
const { requireOwnerSignin } = require("../controllers/auth-owner");
const { read, create, busBySlug, getBuses } = require("../controllers/bus");

router.get("/", getBuses);
router.post("/add", requireOwnerSignin, create);
router.get("/:slug", read);

router.param("slug", busBySlug);

module.exports = router;
