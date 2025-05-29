const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (request, response) => {
  //  '/' - http://localhost:5000
  response.send("Hello world");
});

app.get("/index.html", (request, response) => {
  response.status(404).send('Text index.html');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
