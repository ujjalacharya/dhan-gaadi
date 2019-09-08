const Bus = require("../models/Bus");
const _ = require("lodash");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const {checkDateAvailability} = require("../helpers/misc")

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

exports.getAvailableBusesOfOwner = async (req, res) => {
  const buses = await Bus.find({owner: req.ownerauth, isAvailable: true})
  .sort({ created: -1 });

res.json(buses);
}

exports.getUnavailableBusesOfOwner = async (req, res) => {
  const buses = await Bus.find({owner: req.ownerauth, isAvailable: false})
  .sort({ created: -1 });

res.json(buses);
}

exports.searchBus = async (req, res) => {
  if (_.size(req.query) < 1)
    return res.status(400).json({ error: "Invalid query" });

  const { startLocation, endLocation, journeyDate } = req.query;

  const bus = await Bus.find({startLocation, endLocation, journeyDate, isAvailable: true});

  return res.json(bus);
};

exports.create = async (req, res) => {
  const busExists = await Bus.findOne({ busNumber: req.body.busNumber });
  if (busExists)
    return res.status(403).json({
      error: "Bus is already added!"
    });

  if (req.file !== undefined) {
    const { filename: image } = req.file;

    //Compress image
    await sharp(req.file.path)
      .resize(800)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(req.file.destination, "resized", image));
    fs.unlinkSync(req.file.path);
    req.body.image = "busimage/" + image;
  }

  const bus = new Bus(req.body);

  if(!checkDateAvailability(req.body.journeyDate)){
    bus.isAvailable = false;
  }

  bus.owner = req.ownerauth;

  await bus.save();

  res.json(bus);
};

exports.update = async (req, res) => {
  if (req.file !== undefined) {
    const { filename: image } = req.file;

    //Compress image
    await sharp(req.file.path)
      .resize(800)
      .jpeg({ quality: 100 })
      .toFile(path.resolve(req.file.destination, "resized", image));
    fs.unlinkSync(req.file.path);
    req.body.image = "busimage/" + image;
  }

  let bus = req.bus;
  bus = _.extend(bus, req.body);

  if(!checkDateAvailability(req.body.journeyDate)){
    bus.isAvailable = false;
  }

  await bus.save();

  res.json(bus);
};

exports.remove = async (req, res) => {
  let bus = req.bus;
  await bus.remove();
  res.json({ message: "Bus removed successfully" });
};
