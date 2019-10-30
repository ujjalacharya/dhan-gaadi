const router = require("express").Router();
const {
  requireSuperadminSignin,
  requireOwnerSignin
} = require("../controllers/auth-owner");
const {
  add,
  update,
  read,
  remove,
  getLocations,
  locationById
} = require("../controllers/location");

router
  .route("/")
  .get(requireOwnerSignin, getLocations)
  .post(requireSuperadminSignin, add);

router
  .route("/:id")
  .get(requireSuperadminSignin, read)
  .put(requireSuperadminSignin, update)
  .delete(requireSuperadminSignin, remove);

router.param("id", locationById);

module.exports = router;
