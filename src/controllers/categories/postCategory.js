const connection = require("../../../database");

module.exports = (req, res) => {
  const { name, image = "" } = req.body;
  const sqlQuery = "INSERT INTO categories (name,image) VALUES (?,?)";

  connection
    .promise()
    .query(sqlQuery, [name, image])
    .then(([result]) => {
      const createCategory = {
        id: result.insertId,
        name,
        image,
      };
      res.status(201).json(createCategory);
    })
    .catch((err) => {
      console.error("Could not create category", err);
      res.status(500);
    });
};
