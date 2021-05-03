const usersRouter = require("express").Router();
const userDb = require("../users.json");

usersRouter.get("/", (request, response) => {
  response.status(200).send(userDb);
});

module.exports = usersRouter;
