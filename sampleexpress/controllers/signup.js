const signupRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userDb = require("../users.json");
const saltRounds = 10;

signupRouter.post("/", (request, response) => {
  const { email, password } = request.body;
  const userFound = userDb.find((user) => user.email === email); //find user with responded email

  if (!userFound) {
    bcrypt.hash(password, saltRounds, function (err, hash) {
      // Store hash in your password DB with provided password .
      const user = {
        email: email,
        password: hash,
      };
      userDb.push(user); //insert user into users database
    });

    response.status(200).send({ message: "User created Successfully" });
  } else {
    response.status(400).send({ message: "user already exists" });
  }
});

module.exports = signupRouter;
