const express = require('express');
const router = express.Router();
const Smartphone = require('../models/Smartphone');
const { getMinAndMaxPrices } = require('../controllers/minAndMaxPrice');

router.get('/', async (req, res) => {
  const { limit, sortingMode } = req.query;
  
  try {
    console.log("1111111");
    const [minMaxPrices, products] = await Promise.all([
      // getMinAndMaxPrices('smartphones'), // Получаем минимальную и максимальную цены
      handleCollectionRequest(Smartphone, req, res, limit, sortingMode) // Получаем отфильтрованные смартфоны
    ]);

    // Отправляем клиенту как результат массив смартфонов и объект с минимальной и максимальной ценами
    res.status(200).json({ minMaxPrices, products });
  } catch (error) {
    console.error('Error fetching smartphones:', error);
    res.status(500).json({ error: 'Something went wrong...' });
  }
});


module.exports = router;