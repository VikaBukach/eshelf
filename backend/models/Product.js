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

const productSchema = new mongoose.Schema({
  brand: String,
  model: String,
  category: String,
  image: String,
  specifications: mongoose.Schema.Types.Mixed,
  colors: [colorSchema],
});

const createProductModel = (collectionName) => {
  return mongoose.model("Product", productSchema, collectionName);
};

module.exports = createProductModel;