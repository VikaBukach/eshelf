const express = require("express");
const router = express.Router();
const { loadOnePageOfProducts } = require("../controllers/loadOnePageOfProducts");

router.get("/", async (req, res) => {
  const { collection, filterSettings, priceBy, priceTo, limit, page, sortingMode } = req.query;
  try {
    const products = await loadOnePageOfProducts(
      collection,
      filterSettings,
      priceBy,
      priceTo,
      limit,
      page,
      sortingMode
    );
    res.json(products);
  } catch (error) {
    res.status(500).send("Server Error (router on loaging page of products)");
  }
});

module.exports = router;
