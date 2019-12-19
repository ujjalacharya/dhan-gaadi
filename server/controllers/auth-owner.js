const Owner = require("../models/Owner");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

exports.signup = async (req, res) => {
  const ownerExists = await Owner.findOne({ email: req.body.email });
  if (ownerExists)
    return res.status(403).json({
      error: "Email is taken!"
    });
  const newowner = new Owner(req.body);
  const owner = await newowner.save();

  owner.salt = undefined;
  owner.hashed_password = undefined;
  res.json(owner);
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const owner = await Owner.findOne({ email });

  if (!owner) {
    return res.status(401).json({
      error: "owner with that email does not exist."
    });
  }

  if (!owner.authenticate(password)) {
    return res.status(401).json({
      error: "Email and password do not match"
    });
  }

  const payload = {
    _id: owner.id,
    name: owner.name,
    email: owner.email,
    role: owner.role,
    refresh_hash: owner.salt,
    avatar: owner.photo || null
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h' });

  return res.json({ token });
};

exports.refreshToken = async (req, res) => {
  if (req.body && req.body._id) {
    const owner = await Owner.findOne({ _id: req.body._id });

    const payload = {
      _id: owner.id,
      name: owner.name,
      email: owner.email,
      role: owner.role,
      refresh_hash: owner.salt,
      avatar: owner.photo || null
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET /*{ expiresIn: 5 }*/
    );

    return res.json({ token });
  }
  return res.json({ error: "Invalid content" });
};

exports.requireOwnerSignin = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const owner = parseToken(token);

    const foundowner = await Owner.findById(owner._id).select("name role salt hashed_password");

    if (foundowner) {
      req.ownerauth = foundowner;
      next();
    } else res.status(401).json({ error: "Not authorized!" });
  } else {
    res.status(401).json({ error: "Not authorized" });
  }
};

function parseToken(token) {
  try {
    return jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
  } catch (err) {
    return false;
  }
}

exports.requireSuperadminSignin = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const owner = parseToken(token);

    const foundowner = await Owner.findById(owner._id).select("name role");

    if (foundowner.role === "superadmin") {
      req.ownerauth = foundowner;
      next();
    } else res.status(401).json({ error: "Not authorized!" });
  } else {
    res.status(401).json({ error: "Not authorized" });
  }
};

exports.isPoster = (req, res, next) => {
  let sameUser =
    req.bus &&
    req.ownerauth &&
    req.bus.owner._id.toString() === req.ownerauth._id.toString();
  let adminUser =
    req.bus && req.ownerauth && req.ownerauth.role === "superadmin";

  let isPoster = sameUser || adminUser;

  if (!isPoster) {
    return res.status(403).json({
      error: "User is not authorized to perform this action"
    });
  }
  next();
};

exports.isBookingOwner = (req, res, next) => {
  let sameUser =
    req.booking &&
    req.ownerauth &&
    req.booking.owner._id.toString() === req.ownerauth._id.toString();

  let adminUser =
    req.booking && req.ownerauth && req.ownerauth.role === "superadmin";

  let isPoster = sameUser || adminUser;

  if (!isPoster) {
    return res.status(403).json({
      error: "User is not authorized to perform this action"
    });
  }
  next();
};

exports.isAuth = (req, res, next) => {
  let user =
    req.ownerprofile &&
    req.ownerauth &&
    req.ownerprofile._id.toString() === req.ownerauth._id.toString();
  if (!user) {
    return res.status(403).json({
      error: "Access denied"
    });
  }
  next();
};
