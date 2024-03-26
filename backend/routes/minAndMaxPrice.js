const express = require("express");
const router = express.Router();
const { getMinAndMaxPrices } = require("../controllers/minAndMaxPrice");

router.get("/", async (req, res) => {
  const { collection, filterSettings } = req.query;
  try {
    const minMaxPrices = await getMinAndMaxPrices(collection, filterSettings);
    res.json(minMaxPrices);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
