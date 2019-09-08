const express = require("express");
const router = express.Router();
const { requireOwnerSignin, isPoster } = require("../controllers/auth-owner");

const {
  read,
  create,
  update,
  remove,
  busBySlug,
  getBuses,
  searchBus,
  getAvailableBusesOfOwner,
  getUnavailableBusesOfOwner
} = require("../controllers/bus");

const { uploadBusImage } = require("../helpers/multer");

router
  .route("/")
  .get(getBuses)
  .post(requireOwnerSignin, uploadBusImage, create);

router.get("/bus-available", requireOwnerSignin, getAvailableBusesOfOwner);
router.get("/bus-unavailable", requireOwnerSignin, getUnavailableBusesOfOwner);

router.get("/search", searchBus);

router
  .route("/:busSlug")
  .get(read)
  .put(requireOwnerSignin, isPoster, uploadBusImage, update)
  .delete(requireOwnerSignin, isPoster, remove);

router.param("busSlug", busBySlug);

module.exports = router;
