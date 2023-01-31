const connection = require("../../../database");

module.exports = (req, res) => {
  const sql = "SELECT * from users";

  connection
    .promise()
    .query(sql)
    .then(([result]) => res.send(result));
};
