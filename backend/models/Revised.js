const mongoose = require("mongoose");

const revisedSchema = new mongoose.Schema({
  userEmail: String,
  revised: [
    {
      productId: String,
      createdAt: Date,
    },
  ],
});

const Revised = mongoose.model("reviseds", revisedSchema);

module.exports = Revised;
