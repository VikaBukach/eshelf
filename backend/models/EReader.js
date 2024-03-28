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

const eReaderSchema = new mongoose.Schema({
  brand: String,
  model: String,
  image: String,
  specifications: {
    display_size: String,
    display_type: String,
    display_resolution: String,
    storage: String,
    connectivity: String,
    battery_life: String,
    weight: String,
    waterproof: Boolean,
  },
  guarantee: String,
  colors: [colorSchema],
  category: { type: String, default: "e-readers" },
});

const EReader = mongoose.model("e-readers", eReaderSchema);

module.exports = EReader;