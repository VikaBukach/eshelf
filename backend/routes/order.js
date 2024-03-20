const express = require("express");
const { createOrder, loadOrders } = require("../controllers/order");

const router = express.Router();

router.get("/getOrders", loadOrders);
router.post("/postOrder", createOrder);

module.exports = router;
