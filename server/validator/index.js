exports.userSignupValidator = (req, res, next) => {
 // name is not null and between 4-10 characters
 req.check("name", "Name is required").notEmpty();
 // email is not null, valid and normalized
 req.check("email", "Email must be between 3 to 32 characters")
     .matches(/.+\@.+\..+/)
     .withMessage("Invalid email")
     .isLength({
         min: 4,
         max: 2000
     });
 // check for password
 req.check("password", "Password is required").notEmpty();
 req.check("password")
     .isLength({ min: 6 })
     .withMessage("Password must contain at least 6 characters")
     .matches(/\d/)
     .withMessage("Password must contain a number");
 // check for errors
 const errors = req.validationErrors();
 // if error show the first one as they happen
 if (errors) {
     const firstError = errors.map(error => error.msg)[0];
     return res.status(400).json({ error: firstError });
 }
 // proceed to next middleware
 next();
};

exports.passwordResetValidator = (req, res, next) => {
 // check for password
 req.check("newPassword", "Password is required").notEmpty();
 req.check("newPassword")
     .isLength({ min: 6 })
     .withMessage("Password must be at least 6 chars long")
     .matches(/\d/)
     .withMessage("must contain a number")
     .withMessage("Password must contain a number");

 // check for errors
 const errors = req.validationErrors();
 // if error show the first one as they happen
 if (errors) {
     const firstError = errors.map(error => error.msg)[0];
     return res.status(400).json({ error: firstError });
 }
 // proceed to next middleware
 next();
};