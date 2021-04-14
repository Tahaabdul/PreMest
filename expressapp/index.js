const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(bodyParser);

app.use(morgan(":method :url"));

app.get("/", (request, response) => {
  response.send("This is the main Backend");
});

app.get("/login", (request, response) => {
  const testData = require("./test.json");
  response.send(testD);
});

app.post("/login", (request, response) => {
  const requestBody = request.body;
  response.send({ action: "log in", message: "successful", body: requestBody });
});

app.delete("/login", (request, response) => {
  const users = require("./test.json");
  const deleteUser = users.pop();
  response.send(deleteUser);
});

app.listen(3001, () => {
  console.log("Application is running");
});
