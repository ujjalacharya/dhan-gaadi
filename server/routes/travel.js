const router = require("express").Router();
const {
  requireSuperadminSignin,
} = require("../controllers/auth-owner");
const {
  add,
  update,
  read,
  remove,
  getTravels,
  travelById
} = require("../controllers/travel");

router
  .route("/")
  .get(getTravels)
  .post(requireSuperadminSignin, add);

router
  .route("/:id")
  .get(requireSuperadminSignin, read)
  .put(requireSuperadminSignin, update)
  .delete(requireSuperadminSignin, remove);

router.param("id", travelById);

module.exports = router;
