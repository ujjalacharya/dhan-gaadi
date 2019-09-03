const Booking = require("../models/Booking");
const Bus = require("../models/Bus");
const Guest = require("../models/Guest");

exports.postBooking = async (req, res) => {
  const booking = new Booking(req.body);
  if (req.userauth) {
    booking.user = req.userauth;
  } else {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;

    const guest = new Guest({ name, email, phone, address });
    await guest.save();
    booking.guest = guest;
  }

  const bus = await Bus.findOne({ slug: req.bus.slug });

  bus.seatsAvailable -= req.body.passengers || booking.passengers;

  await bus.save();

  booking.bus = bus;

  await booking.save();

  res.json(booking);
};
