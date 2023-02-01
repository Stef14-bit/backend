const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery = "SELECT * from categories";

  connection
    .promise()
    .query(sqlQuery)
    .then(([result]) => res.send(result))
    .catch((err) => {
      console.error("An error has occurred", err);
      res.status(500);
    });
};
