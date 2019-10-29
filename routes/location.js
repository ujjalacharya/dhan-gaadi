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
  locationByZip
} = require("../controllers/location");

router
  .route("/")
  .get(requireOwnerSignin, getLocations)
  .post(requireSuperadminSignin, add);

router
  .route("/:zip")
  .get(requireSuperadminSignin, read)
  .put(requireSuperadminSignin, update)
  .delete(requireSuperadminSignin, remove);

router.param("zip", locationByZip);

module.exports = router;
