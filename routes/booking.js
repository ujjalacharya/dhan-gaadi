const router = require("express").Router();

const {
  bookingById,
  getOwnerBookings,
  changeVerificationStatus,
  postBooking,
  postSold,
  deleteBooking,
  getAllBookings
} = require("../controllers/booking");

const { checkUserSignin } = require("../controllers/auth-user");
const {
  requireOwnerSignin,
  isBookingOwner,
  requireSuperadminSignin
} = require("../controllers/auth-owner");
const { busBySlug } = require("../controllers/bus");

router.get("/my", requireOwnerSignin, getOwnerBookings);
router.get("/all", requireSuperadminSignin, getAllBookings);

router.post("/sold/:busSlug", requireOwnerSignin, postSold)
router.post("/book/:busSlug", checkUserSignin, postBooking);

router.patch("/:bookingId", requireOwnerSignin, changeVerificationStatus);
router.delete("/:bookingId", requireOwnerSignin, isBookingOwner, deleteBooking);

router.param("busSlug", busBySlug);
router.param("bookingId", bookingById);

module.exports = router;
