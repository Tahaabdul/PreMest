const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    minlength: 6,
  },
  email: {
    required: true,
    type: String,
  },
  passwordHash: {
    required: true,
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
