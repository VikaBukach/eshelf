const mongoose = require("mongoose");

const Order = mongoose.model("order", {
  name: String,
  surname: String,
  phone: String,
  email: String,
  city: String,
  deliveryMethod: String,
  paymentMethod: String,
  orderNumber: Number,
  payment: {
    deliveryCost: Number,
    totalPayment: Number,
  },
  items: Array,
  createdAt: Date,
});

module.exports = Order;
