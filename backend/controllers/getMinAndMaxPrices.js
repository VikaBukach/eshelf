const { findCollection } = require("../utils/findCollection");

const getMinAndMaxPrices = async (collectionModel, filterSettings) => {
  try {
    const collection = findCollection(collectionModel);

    const result = await collection.aggregate([
      { $unwind: "$colors" },
      { $unwind: "$colors.products" },
      filterSettings && Object.keys(filterSettings).length > 0 ? { $match: filterSettings } : { $match: {} },
      {
        $group: {
          _id: null,
          maxPrice: { $max: "$colors.products.price" },
          minPrice: { $min: "$colors.products.price" },
        },
      },
      {
        $project: {
          _id: 0,
          maxPrice: 1,
          minPrice: 1,
        },
      },
    ]);

    return result[0];
  } catch (error) {
    console.error("Error fetching max and min prices (by controller):", error);
    throw error;
  }
};

module.exports = { getMinAndMaxPrices };
