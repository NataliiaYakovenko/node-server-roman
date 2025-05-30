const express = require("express");
const { validationUser } = require("./middlewares/index");

const app = express();
const bodyParser = express.json();

const PORT = 5000;

app.post("./", bodyParser, validationUser);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
