const { body, validationResult } = require("express-validator");

const validateUser = [
  body("email").isEmail().withMessage("Please provide a valid email address"),

  body("role_id").isLength(),
  body("full_name").isLength(),
  body("username").isLength({ min: 4, max: 30 }),
  (req, res, next) => {
    console.log(req.body._hashed_password);
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else next();
  },
];

module.exports = { validateUser };
