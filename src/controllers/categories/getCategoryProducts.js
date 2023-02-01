const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery = "SELECT * FROM products WHERE category_id=?";

  connection
    .promise()
    .query(sqlQuery, [req.params.id])
    .then(([result]) => {
      if (!result.length) {
        return res.status(404).send("No products found");
      }
      res.json(result);
    });
};
