const { body, validationResult } = require("express-validator");

const validateCategory = [
  body("name").isLength().withMessage("Please provide a category name"),
  ,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else next();
  },
];

module.exports = { validateCategory };
