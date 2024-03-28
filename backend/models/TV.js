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

const tvSchema = new mongoose.Schema({
  brand: String,
  model: String,
  category: { type: String, default: "tv" },
  image: String,
  specifications: {
    display_size: String,
    display_resolution: String,
    display_technology: String,
    smart_tv: Boolean,
    hdr_support: Boolean,
    refresh_rate: String,
    processor: String,
    connectivity: String,
    dimensions: String,
    weight: String,
    built_in_speakers: String,
  },
  guarantee: String,
  colors: [colorSchema],
});

const TV = mongoose.model("tv", tvSchema);

module.exports = TV;