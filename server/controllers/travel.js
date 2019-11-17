const Travel = require("../models/Travel");
const _ = require("lodash");

exports.travelById = async (req, res, next, id) => {
  const travel = await Travel.findById(id);

  if (!travel) {
    return res.status(400).json({
      error: "Travel not found"
    });
  }
  req.travel = travel; // adds travel object in req with travel info
  next();
};

exports.add = async (req, res) => {
  const travel = new Travel(req.body);

  await travel.save();

  res.json(travel);
};

exports.getTravels = async (req, res) => {
  const travel = await Travel.find({}).sort({ name: 1 });

  res.json(travel);
};

exports.read = async (req, res) => {
  res.json(req.travel);
};

exports.update = async (req, res) => {
  let travel = req.travel;

  travel = _.extend(travel, req.body);

  await travel.save();

  res.json(travel);
};

exports.remove = async (req, res) => {
  let travel = req.travel;

  await travel.remove();

  res.json({ message: "Travel removed successfully" });
};
