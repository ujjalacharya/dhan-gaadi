const Booking = require("../models/Booking");
const Bus = require("../models/Bus");

exports.postBooking = async (req, res) => {
  const booking = new Booking(req.body);
  if (req.userauth) {
    booking.user = req.userauth;
  }

  const bus = await Bus.findOne({slug: req.bus.slug});

  bus.seatsAvailable -= req.body.passengers || booking.passengers;

  await bus.save();

  booking.bus = bus;

  await booking.save();

  res.json(booking);
};
