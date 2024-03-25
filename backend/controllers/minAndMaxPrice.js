const mongoose = require('mongoose');
const Smartphone = require('../models/Smartphone');

const getMinAndMaxPrices = async (collectionModel, filterSettingsArray) => {
  
  try {
    let collection;
    switch (collectionModel) {
      case "smartphones": collection = Smartphone;
        break;
      default: break;
    }

const result = await collection.aggregate([
  { $unwind: "$colors" },
  { $unwind: "$colors.products" },
  { $match: filterSettingsArray },
  {
    $group: {
      _id: null,
      maxPrice: { $max: "$colors.products.price" },
      minPrice: { $min: "$colors.products.price" }
    }
  },
  {
    $project: {
      _id: 0,
      maxPrice: 1,
      minPrice: 1
    }
  }
]);

return result[0];
} catch (error) {
console.error("Error fetching max and min prices (by controller):", error);
throw error;
}
};

module.exports = { getMinAndMaxPrices };