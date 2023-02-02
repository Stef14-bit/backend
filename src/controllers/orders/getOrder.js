const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const sqlQuery =
    "SELECT orders.id,users.username, products.name,orders.quantity FROM orders JOIN users ON orders.customer_id = users.id JOIN products ON orders.product_id = products.id WHERE orders.id=?";

  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => {
      if (!result.length) {
        return res.status(404).send("No orders");
      }
      res.status(200).send(result[0]);
    })
    .catch((err) => {
      console.error("An error has occurred", err);
      res.status(500);
    });
};
