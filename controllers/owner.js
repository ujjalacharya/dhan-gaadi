const Owner = require("../models/Owner");

exports.getAllOwners = async (req, res) => {
  const owners = await Owner.find().sort({ created: -1 }).select("name email phone createdAt updatedAt role");
  res.json(owners);
};

exports.ownerById = async (req, res, next, id) => {
  const owner = await Owner.findById(id);
  if (owner) {
    owner.salt = undefined;
    owner.hashed_password = undefined;
    req.ownerprofile = owner;
    next();
  } else {
    res.status(400).json({ error: "Owner not found!" });
  }
};

exports.read = (req, res) => {
  return res.json(req.ownerprofile);
};