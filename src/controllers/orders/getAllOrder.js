const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery =
    "SELECT orders.id,users.username, products.name,orders.quantity FROM orders JOIN users ON orders.customer_id = users.id JOIN products ON orders.product_id = products.id";

  connection
    .promise()
    .query(sqlQuery)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error("An error has occurred", err);
      res.status(500);
    });
};
