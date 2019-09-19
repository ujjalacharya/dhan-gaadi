const router = require("express").Router();
const booking = require("../controllers/booking");
const { checkUserSignin } = require("../controllers/auth-user");
const { requireOwnerSignin } = require("../controllers/auth-owner");
const { busBySlug } = require("../controllers/bus");

router.get("/", requireOwnerSignin, booking.getOwnerBookings);

router.post("/:busSlug", checkUserSignin, booking.postBooking);

router.param("busSlug", busBySlug);

module.exports = router;
