const express = require("express");
const router = express.Router();
const { loadOneProduct } = require("../controllers/loadOneProduct");

router.get("/", async (req, res) => {
  const { collection, id } = req.query;
  try {
    const products = await loadOneProduct(collection, id);
    res.json(products);
  } catch (error) {
    res.status(500).send("Server Error (router on loaging one product)");
  }
});

module.exports = router;
