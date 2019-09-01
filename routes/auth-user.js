const express = require("express");

const {
  signup,
  signin,
  socialLogin,
  forgotPassword,
  resetPassword
} = require("../controllers/auth-user");

const { userSignupValidator, passwordResetValidator } = require("../validator");

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);

router.post("/social-login", socialLogin);

router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);

module.exports = router;