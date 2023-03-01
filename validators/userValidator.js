const { body, validationResult } = require("express-validator");

const passwordMessage =
  "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol";

const validateUser = [
  body("email").isEmail().withMessage("Please provide a vallid email adress"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .minUppercase({ min: 1 })
    .withMessage(passwordMessage)
    .minNumbers({ min: 1 })
    .withMessage(passwordMessage)
    .minSymbols({ min: 1 })
    .withMessage(passwordMessage),
  body("role_id").isLength(),
  body("image").isString(),
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
