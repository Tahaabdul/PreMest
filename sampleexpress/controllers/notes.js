const notesRouter = require("express").Router();
const notes = require("../notes.json");

notesRouter.get("/", (request, response) => {
  response.send(notes);
});

notesRouter.post("/", (request, response) => {
  const requestBody = request.body;
  console.log(requestBody);

  if (requestBody.title && requestBody.content) {
    notes.push(requestBody);
    response.status(201).send(requestBody);
  } else {
    response
      .status(400)
      .send({ message: "Ensure request has title and Content!" });
  }
});

module.exports = notesRouter;
