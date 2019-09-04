const express = require("express");
const router = express.Router();
const { requireOwnerSignin } = require("../controllers/auth-owner");
const { read, create, busBySlug, getBuses } = require("../controllers/bus");
const { uploadBusImage } = require("../helpers/multer");

router
  .route("/")
  .get(getBuses)
  .post(requireOwnerSignin, uploadBusImage, create);

router.get("/:busSlug", read);

router.param("busSlug", busBySlug);

module.exports = router;
