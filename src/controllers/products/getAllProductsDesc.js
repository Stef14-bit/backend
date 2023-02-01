const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery = "SELECT * FROM products ORDER BY price DESC";
  connection
    .promise()
    .query(sqlQuery)
    .then(([result]) => res.send(result))
    .catch((err) => {
      console.error("An error occurred", err);
      res.sendStatus(500);
    });
};
