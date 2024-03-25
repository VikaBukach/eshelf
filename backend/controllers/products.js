const mongoose = require('mongoose');
const Smartphone = require('../models/Smartphone');




const handleCollectionRequest = (collectionModel, req, res, limit, sortingMode = "Best Seller") => {
    const page = parseInt(req.query.page) || 1;
    const actualLimit = limit ? parseInt(limit) : 100000;
    const skip = (page - 1) * actualLimit;
  
    let sortQuery = {};
    let sortKey;
  
    switch (sortingMode) {
      case "From cheap":
        sortKey = "colors.0.products.0.price";
        sortQuery[sortKey] = 1;
        break;
      case "From expensive":
        sortKey = "colors.0.products.0.price";
        sortQuery[sortKey] = -1;
        break;
      default:
        sortQuery = { model: 1 };
        break;
    }
  
    collectionModel
      .find({ brand: 'Apple' }) // Пример: фильтрация смартфонов только по бренду Apple
      .sort(sortQuery)
      .skip(skip)
      .limit(actualLimit)
      .exec()
      .then((products) => {
        res.status(200).json(products);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "Something goes wrong..." });
      });
  };











  
  module.exports = { handleCollectionRequest };