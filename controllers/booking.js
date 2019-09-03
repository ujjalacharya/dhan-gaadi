const Booking = require("../models/Booking");
const Bus = require("../models/Bus");
const User = require("../models/User");

exports.postBooking = async (req, res) => {
    const booking = new Booking(req.body);
    if(req.userauth){
        booking.user = req.userauth;
    }

    console.log(req.bus)
    booking.bus = req.bus;

    await booking.save();

    res.json(booking)
}