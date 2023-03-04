const { body, validationResult } = require("express-validator");

const validateOrder = [
  body("customer_id").isLength(),
  body("product_id").isLength(),
  body("quantity").isLength().withMessage("Order cannot be empty"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else next();
  },
];

module.exports = { validateOrder };
