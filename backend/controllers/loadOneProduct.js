const { findCollection } = require("../utils/findCollection");

const loadOneProduct = async (collectionModel, id) => {
  try {
    const collection = findCollection(collectionModel);

    const product = await collection.findById(id);

    return { product };
  } catch (error) {
    console.error("Error fetching one prodct (by controller)", error);
    throw error;
  }
};

module.exports = { loadOneProduct };
