const Bus = require("../models/Bus");

exports.busBySlug = async (req, res, next, slug) => {
  const bus = await Bus.findOne({ slug }).populate("owner", "name role");
  if (!bus) {
    return res.status(400).json({
      error: "Bus not found"
    });
  }
  req.bus = bus; // adds bus object in req with bus info
  next();
};

exports.read = (req, res) => {
  return res.json(req.bus);
};

exports.create = async (req, res) => {
  const busExists = await Bus.findOne({ busNumber: req.body.busNumber });
  if (busExists)
    return res.status(403).json({
      error: "Bus is already added!"
    });

  const bus = new Bus(req.body);

  bus.owner = req.ownerauth;

  await bus.save();

  res.json(bus);
};
