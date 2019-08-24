const express = require("express");

const {
  signup,
  signin,
  socialLogin,
  forgotPassword,
  resetPassword
} = require("../controllers/auth-user");

const { userById } = require("../controllers/user");
const { userSignupValidator, passwordResetValidator } = require("../validator");

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);

router.post("/social-login", socialLogin);

router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;