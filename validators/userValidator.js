const { body, validationResult } = require("express-validator");

const validateUser = [
  body("email").isEmail().withMessage("Please provide a vallid email adress"),
  body("password")
    .isStrongPassword()
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol"
    )
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one symbol"),
  body("role_id").isLength(),
  body("full_name").isLength(),
  body("username").isLength({ min: 4, max: 30 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else next();
  },
];

module.exports = { validateUser };
