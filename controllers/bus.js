const Bus = require("../models/Bus");
const _ = require("lodash");

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

exports.getBuses = async (req, res) => {
  const buses = await Bus.find()
    .populate("owner", "name")
    .sort({ created: -1 });

  res.json(buses);
};

exports.create = async (req, res) => {
  const busExists = await Bus.findOne({ busNumber: req.body.busNumber });
  if (busExists)
    return res.status(403).json({
      error: "Bus is already added!"
    });

  if (req.file !== undefined) {
    req.body.image = "busimage/" + req.file.filename;
  }

  const bus = new Bus(req.body);

  bus.owner = req.ownerauth;

  await bus.save();

  res.json(bus);
};

exports.update = async (req, res) => {
  if (req.file !== undefined) {
    req.body.image = "busimage/" + req.file.filename;
  }

  let bus = req.bus;
  bus = _.extend(bus, req.body);

  await bus.save();

  res.json(bus);
};

exports.remove = async (req, res) => {
  let bus = req.bus;
  await bus.remove();
  res.json({ message: "Bus removed successfully" });
};