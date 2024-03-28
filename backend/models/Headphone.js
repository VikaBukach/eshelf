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

const headphoneSchema = new mongoose.Schema({
  brand: String,
  model: String,
  image: String,
  specifications: {
    characteristics: {
      features: String,
      type_connection: String,
      noise_cancelling: Boolean,
      wireless: Boolean,
      bluetooth_version: String,
      battery_life: String,
      quick_charge: String,
      range_of_action: String,
    },
    additional_options: {
      options: [String],
    },
  },
  colors: [colorSchema],
  category: { type: String, default: "headphones" },
});

const Headphone = mongoose.model("Headphone", headphoneSchema);

module.exports = Headphone;