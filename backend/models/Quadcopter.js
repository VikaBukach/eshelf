const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  color: String,
  images: [String],
  products: [
    {
      article: Number,
      quantity: Number,
      price: Number,
      discount_price: Number,
    },
  ],
});

const quadcopterSchema = new mongoose.Schema({
  brand: String,
  model: String,
  category: { type: String, default: "quadcopters" },
  image: String,
  specifications: {
    characteristics: {
      size: String,
      type_of_management: String,
      type: String,
      max_speed: String,
      question: String,
      charging_time: String,
      battery_capacity: String,
      flight_time: String,
      flight_height: String,
      range_of_action: String,
      video_broadcast: String,
    },
    additional_options: {
      options: [String],
      delivery_set: String,
    },
    other: {
      guarantee: String,
    },
  },
  colors: [colorSchema],
});

const Quadcopter = mongoose.model("Quadcopter", quadcopterSchema);

module.exports = Quadcopter;