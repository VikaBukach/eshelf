const mongoose = require("mongoose");

const User = mongoose.model("users", {
  userId: String,
  name: String,
  surname: String,
  email: String,
  password: String,
});

module.exports = User;
