const express = require("express");
const router = express.Router();

router.post("/add", requireSignin, createPost);

router.param("slug", busBySlug);

module.exports = router;