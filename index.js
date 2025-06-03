const express = require("express");
const { validationUser } = require("./middlewares/index");
const UserController = require("./controllers/UserController");

const app = express();
const bodyParser = express.json();

const PORT = 5000;

app.post("/users", bodyParser, validationUser, UserController.registerUser);

app.get("/users", UserController.getAllUsers);

app.get("/users/:userId", UserController.getOneUser);

app.delete("/users/:userId", UserController.deleteOneUser);

app.put("/users/:userId", bodyParser, UserController.updateInfoUser);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
