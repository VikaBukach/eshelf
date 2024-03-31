const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  color: String,
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

const tabletSchema = new mongoose.Schema({
  brand: String,
  model: String,
  category: { type: String, default: "tablets" },
  image: String,
  specifications: {
    display: {
      display_size: String,
      display_resolution: String,
      technology: String,
    },
    processor: {
      processor: String,
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
      battery_life: String,
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
});

const Tablet = mongoose.model("tablets", tabletSchema);

module.exports = Tablet;