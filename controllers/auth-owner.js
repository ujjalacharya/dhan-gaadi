const Owner = require("../models/Owner");
const jwt = require("jsonwebtoken");
const _ = require("lodash");


exports.signup = async (req, res) => {
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
    email: owner.email
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET
    // {expiresIn:"1h"}
  );

  return res.json({ token });
};

exports.requireSignin = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const owner = parseToken(token);

    const foundowner = await Owner.findById(owner._id).select("name");

    if (foundowner) {
      req.auth = foundowner;
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
    return res.status(400).json({ error: err.message });
  }
}

exports.isAuth = (req, res, next) => {
  let owner =
    req.profile &&
    req.auth &&
    req.profile._id.toString() === req.auth._id.toString();
  if (!owner) {
    return res.status(403).json({
      error: "Access denied"
    });
  }
  next();
};
