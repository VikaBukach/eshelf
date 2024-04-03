const mongoose = require("mongoose");

const Review = mongoose.model("reviews", {
  userName: String,
  rating: String,
  advantages: String,
  disadvantages: String,
  feedback: String,
  productId: String,
  createdAt: Date,
});

module.exports = Review;
