const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const notesRouter = require("./controllers/notes");
const loginRouter = require("./controllers/login");
const signupRouter = require("./controllers/signup");
const usersRouter = require("./controllers/allUsers");

app.use(bodyParser.json());

app.use("/notes", notesRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log("Server running");
});
