const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userDb = require("../users.json");

require("dotenv").config();

loginRouter.post("/", async (request, response) => {
  const { email, password } = request.body;

  const userFound = userDb.find((user) => user.email === email); //find user with responded email
  console.log(userFound);

  if (userFound) {
    const match = await bcrypt.compare(password, userFound.password); //match response password with stored/hashed password from bcrypt
    if (match) {
      const jwtBody = {
        //create jwt token and response
        email: userFound.email,
        id: userFound.id,
      };
      const token = jwt.sign(jwtBody, process.env.JWT_SECRET); //sign  token with our secret key

      response.status(200).send({ jwtToken: token, email: userFound.email });
    } else {
      response.status(404).send({ message: "Username and Password incorrect" });
    }
  } else {
    response.status(404).send({ message: "No user with this email found" });
  }
});

module.exports = loginRouter;
