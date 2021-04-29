const express = require("express");
const loginRouter = express.Router();

loginRouter.get("/", (request, response) => {
  const testData = require("../test.json");
  response.send(testData);
});

// a child route or endpoint of website.com/login route
loginRouter.get("/master-user", (request, response) => {
  const testData = require("../test.json");
  response.send({ alliance: "The master of of two towers" });
});

loginRouter.post("/", (request, response) => {
  const requestBody = request.body;
  response.send({ action: "log in", message: "successful", body: requestBody });
});

loginRouter.delete("/", (request, response) => {
  const users = require("../test.json");
  const deleteUser = users.pop();
  response.send(deleteUser);
});

module.exports = loginRouter;
