const express = require("express");

const app = express();

const PORT = 5000;

app.get(
  "/",
  (request, response,next) => {                //  '/' - http://localhost:5000
    // response.send("Hello world");
    console.log("first requestHandler");

    request.newfield = 'super-important-value'

    next()
  },
  (request, response,next) => {
    console.log("seconf requestHandler");
    next()
  },
  (request, response,next) => {
    console.log("third requestHandler");
    console.log(request.newfield)
  }
);

app.get("/index.html", (request, response) => {
  response.status(404).send("Text index.html");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
