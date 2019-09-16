const User = require("../models/User");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

const { sendEmail } = require("../helpers");

exports.signup = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists)
    return res.status(403).json({
      error: "Email is taken!"
    });

  const newuser = new User(req.body);
  const user = await newuser.save();

  user.salt = undefined;
  user.hashed_password = undefined;
  res.json(user);
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      error: "User with that email does not exist."
    });
  }

  if (!user.authenticate(password)) {
    return res.status(401).json({
      error: "Email and password do not match"
    });
  }

  const payload = {
    _id: user.id,
    name: user.name,
    email: user.email
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET
    // {expiresIn:"1h"}
  );

  return res.json({ token });
};

exports.requireUserSignin = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const user = parseToken(token);

    const founduser = await User.findById(user._id).select("name");

    if (founduser) {
      req.userauth = founduser;
      next();
    } else res.status(401).json({ error: "Not authorized!" });
  } else {
    res.status(401).json({ error: "Not authorized" });
  }
};

exports.checkUserSignin = async (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const user = parseToken(token);

    const founduser = await User.findById(user._id).select("name");

    if (founduser) {
      req.userauth = founduser;
    }
  }
  next();
};

function parseToken(token) {
  try {
    return jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

exports.isUser = (req, res, next) => {
  let user =
    req.userprofile &&
    req.userauth &&
    req.userprofile._id.toString() === req.userauth._id.toString();
  if (!user) {
    return res.status(403).json({
      error: "Access denied"
    });
  }
  next();
};

exports.refreshToken = async (req, res) => {
  if (req.body && req.body.token) {
    const parsed = parseToken(`Bearer ${req.body.token}`);

    const user = await User.findById(parsed._id);

    const payload = {
      _id: user.id,
      name: user.name,
      email: user.email
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET
      // {expiresIn:"1h"}
    );

    return res.json({ token });
  }
  return res.json({ error: "Invalid content" });
};

exports.socialLogin = async (req, res) => {
  // try signup by finding user with req.email
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    // create a new user and login
    user = new User(req.body);
    req.userprofile = user;
    user.save();
    // generate a token with user id and secret
    const token = jwt.sign(
      { _id: user._id, iss: "NODEAPI" },
      process.env.JWT_SECRET
    );
    // return response with user and token to frontend client
    const { _id, name, email } = user;
    return res.json({ token, user: { _id, name, email } });
  } else {
    // update existing user with new social info and login
    req.userprofile = user;
    user = _.extend(user, req.body);
    user.save();
    // generate a token with user id and secret
    const token = jwt.sign(
      { _id: user._id, iss: "NODEAPI" },
      process.env.JWT_SECRET
    );
    // return response with user and token to frontend client
    const { _id, name, email } = user;
    return res.json({ token, user: { _id, name, email } });
  }
};

exports.forgotPassword = async (req, res) => {
  if (!req.body) return res.status(400).json({ message: "No request body" });
  if (!req.body.email)
    return res.status(400).json({ message: "No Email in request body" });

  const { email } = req.body;
  // find the user based on email
  const user = await User.findOne({ email });
  // if err or no user
  if (!user)
    return res.status("401").json({
      error: "User with that email does not exist!"
    });

  // generate a token with user id and secret
  const token = jwt.sign(
    { _id: user._id, iss: "NODEAPI" },
    process.env.JWT_SECRET
  );

  // email data
  const emailData = {
    from: "noreply@dhangaadi.com",
    to: email,
    subject: "Password Reset Instructions",
    text: `Please use the following link to reset your password: ${process.env.CLIENT_URL}/reset-password/${token}`,
    html: `<p>Please use the following link to reset your password:</p> <p>${process.env.CLIENT_URL}/reset-password/${token}</p>`
  };

  return user.updateOne({ resetPasswordLink: token }, (err, success) => {
    if (err) {
      return res.json({ message: err });
    } else {
      sendEmail(emailData);
      return res.status(200).json({
        message: `Email has been sent to ${email}. Follow the instructions to reset your password.`
      });
    }
  });
};

exports.resetPassword = async (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  let user = await User.findOne({ resetPasswordLink });
  // if err or no user
  if (!user)
    return res.status(401).json({
      error: "Invalid Link!"
    });

  const updatedFields = {
    password: newPassword,
    resetPasswordLink: ""
  };

  user = _.extend(user, updatedFields);
  user.updated = Date.now();

  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      message: `Great! Now you can login with your new password.`
    });
  });
};
