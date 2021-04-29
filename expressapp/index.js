const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const loginRouter = require("./controllers/login");

app.use(morgan(":method :url"));
app.use(bodyParser());
// app.use(cors);

app.use("/login", loginRouter);

app.get("/", (request, response) => {
  response.send("This is the main Backend");
});

// app.use((request, response, next) => {
//   response.status(404);
//   next();
// });

app.listen(3001, () => {
  console.log("Application is running");
});
