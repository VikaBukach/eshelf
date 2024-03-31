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

const monitorSchema = new mongoose.Schema({
  brand: String,
  model: String,
  category: { type: String, default: "monitors" },
  image: String,
  specifications: {
    display: {
      display_diagonal: String,
      frequency: String,
      display_matrix_type: String,
      display_resolution: String,
      display_brightness: String,
      matrix_type: String,
      display_contrast: String,
      features: String,
      maximum_number_of_colors: String,
      power_consumption: String,
    },
    additional_options: {
      options: [String],
    },
    delivery_set: {
      cable: String,
      charging_port: String,
    },
    other: {
      guarantee: String,
      dimension: String,
    },
  },
  colors: [colorSchema],
});

const Monitor = mongoose.model("Monitor", monitorSchema);

module.exports = Monitor;