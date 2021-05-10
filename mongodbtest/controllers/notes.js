const noteRouter = require("express").Router();
const Note = require("../model/Notes");

noteRouter.get("/", (request, response) => {
  Note.find({}).then((res) => {
    response.status(200).send(res);
  });
});

//post function
noteRouter.post("/", async (request, response) => {
  const { title, content } = request.body;

  if (title && content && content.length >= 20 && content.length <= 80) {
    const noteCount = await Note.count();
    const newNote = new Note({
      id: noteCount + 1,
      title: title,
      content: content,
    });
    newNote
      .save()
      .then((res) => {
        response.status(201).send(res);
      })
      .catch((err) => {
        console.error(err);
        response.status(503);
      });
  } else {
    response.status(400).send({ message: "Check your Note request body " });
  }
});

noteRouter.delete("/:id", (request, resposne) => {
  const noteId = request.params.id;
  Note.findByIdAndDelete(noteId);
  resposne.status().send({ message: `Note with id: ${noteId} was deleted ` });
});

module.exports = noteRouter;
