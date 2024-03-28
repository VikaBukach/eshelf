const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  color: String,
  images: [String],
  products: [
    {
      article: Number,
      connection: String,
      quantity: Number,
      price: Number,
      discount_price: Number,
    },
  ],
});

const mouseSchema = new mongoose.Schema({
  brand: String,
  model: String,
  category: { type: String, default: "mouses" },
  image: String,
  specifications: {
    characteristics: {
      weight: String,
      power_source: String,
      sensor_type: String,
      dimension: String,
      guarantee: String,
    },
    features: {
      for_hand: String,
      size: String,
      quantity_of_buttons: String,
      compatibility: String,
    },
  },
  colors: [colorSchema],
});

const Mouse = mongoose.model("mouses", mouseSchema);

module.exports = Mouse;