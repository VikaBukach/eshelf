const client = require("../../db");

const createOrder = async (req, res) => {
  const orderData = req.body;

  const database = client.getDb();
  const ordersCollection = database.collection("orders");

  const data = { ...orderData, createdAt: new Date(Date.now()).toISOString() };

  try {
    await ordersCollection.insertOne(data);
    res.status(201).send(data);
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

const loadOrders = async (req, res) => {
  const { email } = req.query;

  const database = client.getDb();
  const ordersCollection = database.collection("orders");
  try {
    const result = await ordersCollection
      .find({
        email,
      })
      .sort({ createdAt: -1 })
      .toArray();

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
