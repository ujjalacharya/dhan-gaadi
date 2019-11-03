const Guest = require("../models/Guest");

exports.getAllGuests = async (req, res) => {
  const guests = await Guest.find().sort({ created: -1 }).select("name email phone createdAt updatedAt address");

  res.json(guests);
};