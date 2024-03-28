const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  color: String,
  images: [String],
  products: [
    {
      article: Number,
      capacity: String,
      quantity: Number,
      price: Number,
      discount_price: Number,
    },
  ],
});

const smartphoneSchema = new mongoose.Schema({
  brand: String,
  model: String,
  image: String,
  specifications: {
    display: {
      frequency: String,
      display_matrix_type: String,
      display_resolution: String,
      screen_diagonal: String,
    },
    processor: {
      type: String,
      number_of_cores: String,
    },
    memory: {
      RAM: String,
    },
    camera: {
      functions: [String],
      front_camera: String,
      main_camera: String,
      number_of_cameras: String,
    },
    battery: {
      capacity: String,
      charging_port: String,
    },
    other: {
      weight: String,
      dimension: String,
    },
    operating_system: {
      type: String,
    },
  },
  colors: [colorSchema],
  category: String,
});

const Smartphone = mongoose.model("Smartphone", smartphoneSchema);

module.exports = Smartphone;
