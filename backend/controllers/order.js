const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const orderData = req.body;

  const order = await Order.create({
    ...orderData,
    createdAt: new Date(Date.now()).toISOString(),
  });

  try {
    res.status(201).send(order);
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

const loadOrders = async (req, res) => {
  const { email } = req.query;
  try {
    const result = await Order.find({
      email,
    }).sort([["createdAt", -1]]);

    res.status(200).send({
      orders: result,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

module.exports = { createOrder, loadOrders };
