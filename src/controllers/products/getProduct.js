const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const sqlQuery = "SELECT * from products WHERE id=?";

  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => {
      if (!result.length) {
        return res.status(404).send("No product");
      }
      res.json(result[0]);
    })
    .catch((err) => {
      console.error("Error retrieving product");
      res.status(500);
    });
};
