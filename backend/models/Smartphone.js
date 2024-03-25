const mongoose = require('mongoose');

// Определение схемы для цвета смартфона
const colorSchema = new mongoose.Schema({
  color: String,
  images: [String],
  products: [{
    article: Number,
    capacity: String,
    quantity: Number,
    price: Number,
    discount_price: Number
  }]
});

// Определение схемы для смартфона
const smartphoneSchema = new mongoose.Schema({
  brand: String,
  model: String,
  image: String,
  specifications: {
    display: {
      frequency: String,
      display_matrix_type: String,
      display_resolution: String,
      screen_diagonal: String
    },
    processor: {
      type: String,
      number_of_cores: String
    },
    memory: {
      RAM: String
    },
    camera: {
      functions: [String],
      front_camera: String,
      main_camera: String,
      number_of_cameras: String
    },
    battery: {
      capacity: String,
      charging_port: String
    },
    other: {
      weight: String,
      dimension: String
    },
    operating_system: {
      type: String
    }
  },
  colors: [colorSchema], // Вложенный объект цвета
  category: String
});

// Создание модели смартфона
const Smartphone = mongoose.model('Smartphone', smartphoneSchema);

module.exports = Smartphone;