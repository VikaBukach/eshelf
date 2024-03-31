const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  color: String,
  images: [String],
  products: [
    {
      article: Number,
      case_size: String,
      quantity: Number,
      battery: String,
      price: Number,
      discount_price: Number,
    },
  ],
});

const smartwatchSchema = new mongoose.Schema({
  brand: String,
  model: String,
  category: { type: String, default: "smartwatches" },
  image: String,
  specifications: {
    display: {
      display_resolution: String,
      display_matrix_type: String,
    },
    processor: {
      matrix_type: String,
      type: String,
    },
    memory: {
      memory: String,
    },
    microphone: {
      availability: String,
    },
    water_resistant: {
      swimproof: String,
    },
    connectivity: {
      gps: [String],
    },
  },
  functions: {
    features: [String],
    other: {
      weight: String,
    },
    operating_system: {
      type: String,
    },
  },
  colors: [colorSchema],
});

const Smartwatch = mongoose.model("Smartwatch", smartwatchSchema);

module.exports = Smartwatch;