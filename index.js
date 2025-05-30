const express = require("express");
const { validationUser } = require("./middlewares/index");
const UserController = require("./controllers/UserController");

const app = express();
const bodyParser = express.json();

const PORT = 5000;

app.post("/users", bodyParser, validationUser, UserController.registerUser);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
