const router = require("express").Router();
const booking = require("../controllers/booking");
const { checkUserSignin } = require("../controllers/auth-user");
const { busBySlug } = require("../controllers/bus");

router.post("/:busSlug", checkUserSignin, booking.postBooking);

router.param("busSlug", busBySlug);

module.exports = router;
