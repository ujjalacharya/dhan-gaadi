const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().sort({ created: -1 }).select("name email phone createdAt updatedAt address");

  res.json(users);
};

exports.userById = async (req, res, next, id) => {
  const user = await User.findById(id);
  if (user) {
    user.salt = undefined;
    user.hashed_password = undefined;
    req.userprofile = user;
    next();
  } else {
    res.status(400).json({ error: "User not found!" });
  }
};

exports.read = (req, res) => {
  return res.json(req.userprofile);
};