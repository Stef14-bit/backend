const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("name").isLength().withMessage("Please insert the product name"),
  body("price")
    .isLength()
    .isFloat()
    .withMessage("Please insert a valid price in format 0.00"),
  body("stock").isLength(),
  body("category_id").isLength(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else next();
  },
];

module.exports = { validateProduct };
