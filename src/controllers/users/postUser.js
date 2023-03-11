const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery =
    "INSERT INTO users (email,hashed_password,role_id,image,full_name,username) VALUES (?,?,?,?,?,?)";
  const {
    email,
    hashed_password,
    role_id = 1,
    image = "",
    full_name,
    username,
  } = req.body;

  connection
    .promise()
    .query(sqlQuery, [
      email,
      hashed_password,
      role_id,
      image,
      full_name,
      username,
    ])
    .then(([result]) => {
      const createUser = {
        id: result.insertId,
        email,
        hashed_password,
        role_id,
        image,
        full_name,
        username,
      };
      res.status(201).json(createUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Failed to register user" });
    });
};
