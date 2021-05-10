const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    // minlength: 3,
    // maxlength: 80,
  },
  content: {
    type: String,
    required: true,
    minlength: 20,
    maxlength: 80,
  },
});
noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
