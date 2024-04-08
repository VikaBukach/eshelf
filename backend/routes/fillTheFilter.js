const express = require("express");
const router = express.Router();
const { fillTheFilter } = require("../controllers/fillTheFilter");

router.get("/", async (req, res) => {
  const { collection, filterSettings, filterCriterias, priceBy, priceTo } = req.query;
  try {
    const minMaxPrices = await fillTheFilter(collection, filterSettings, filterCriterias, priceBy, priceTo);
    res.json(minMaxPrices);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
