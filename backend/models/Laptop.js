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

const laptopSchema = new mongoose.Schema({
  brand: String,
  model: String,
  image: String,
  specifications: {
    display: {
      display_resolution: String,
      screen_diagonal: String,
    },
    processor: {
      type: String,
      data_drives: String,
    },
    memory: {
      RAM: String,
      type_of_RAM: String,
    },
    camera: {
      front_camera: String,
    },
    additional_options: {
      options: [String],
      video_card: String,
    },
    battery: {
      battery_life: String,
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
  category: { type: String, default: "laptops" },
});

const Laptop = mongoose.model("laptops", laptopSchema);

module.exports = Laptop;