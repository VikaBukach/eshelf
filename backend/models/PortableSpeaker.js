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

const portableSpeakerSchema = new mongoose.Schema({
  brand: String,
  model: String,
  category: { type: String, default: "portable-speakers" },
  image: String,
  specifications: {
    dimensions: String,
    weight: String,
    waterproof: Boolean,
    battery_life: String,
    connectivity: String,
    wireless_range: String,
    driver_size: String,
    output_power: String,
    frequency_response: String,
  },
  guarantee: String,
  colors: [colorSchema],
});

const PortableSpeaker = mongoose.model("portable-speakers", portableSpeakerSchema);

module.exports = PortableSpeaker;