const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("order").isLength().withMessage("Order cannot be empty"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else next();
  },
];

module.exports = { validateProduct };
