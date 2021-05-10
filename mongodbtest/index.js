const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const noteRouter = require("./controllers/notes");
require("dotenv").config();

const mongoConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

mongoose
  .connect(process.env.MONGO_URI, mongoConfig)
  .then((response) => {
    console.log("successfully conncted to database server");
  })
  .catch((response) => {
    console.error("We ran into a problem connecting to the database");
  });

app.use(bodyParser.json());

app.use("/notes", noteRouter);
app.listen(process.env.PORT, () => {
  console.log("App is runing");
});
