const { filterByPrice } = require("../utils/filterByPrice");
const { findCollection } = require("../utils/findCollection");

const loadOnePageOfProducts = async (
  collectionModel,
  filterSettings,
  priceBy = 0,
  priceTo = 0,
  limit,
  page,
  sortingMode
) => {
  try {
    const collection = findCollection(collectionModel);

    let sortCriteria;
    switch (sortingMode) {
      case "From cheap":
        sortCriteria = { "colors.products.0.price": 1 };
        break;
      case "From expensive":
        sortCriteria = { "colors.products.0.price": -1 };
        break;
      default:
        sortCriteria = { model: 1 };
        break;
    }

    const filteredProductsPipeline =
      filterSettings && Object.keys(filterSettings).length > 0
        ? [{ $unwind: "$colors" }, { $match: filterSettings }, { $sort: sortCriteria }]
        : [{ $unwind: "$colors" }, { $sort: sortCriteria }];

    const filteredProductsOnlyByCheckboxes = await collection.aggregate(filteredProductsPipeline);

    const filteredProducts = filterByPrice(filteredProductsOnlyByCheckboxes, priceBy, priceTo);

    const totalCount = filteredProducts.length;
    const numberOfPages = Math.ceil(totalCount / limit);

    const skip = limit * (page - 1);
    const paginatedProducts1 = filteredProducts.splice(skip);
    const paginatedProducts = paginatedProducts1.splice(0, limit);

    return { paginatedProducts, numberOfPages };
  } catch (error) {
    console.error("Error fetching page of products (by controller)", error);
    throw error;
  }
};

module.exports = { loadOnePageOfProducts };
