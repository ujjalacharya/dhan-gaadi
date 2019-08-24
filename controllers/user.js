    
const User = require("../models/User");

exports.userById = async (req, res, next, id) => {
  const user = await User.findById(id);
  if (user) {
    user.salt = undefined;
    user.hashed_password = undefined;
    req.profile = user;
    next();
  } else {
    res.status(400).json({ error: "User not found!" });
  }
};