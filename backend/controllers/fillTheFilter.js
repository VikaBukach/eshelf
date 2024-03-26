const mongoose = require("mongoose");
const Smartphone = require("../models/Smartphone");

const fillTheFilter = async (collectionModel, filterSettingsArray, filterCriterias) => {
  try {
    let collection;
    switch (collectionModel) {
      case "smartphones":
        collection = Smartphone;
        break;
      default:
        break;
    }

    const [filteredProducts, allProducts] = await Promise.all([
      collection.aggregate([{ $unwind: "$colors" }, { $match: filterSettingsArray }]),
      collection.aggregate([{ $unwind: "$colors" }]),
    ]);

    const allValuesFromAllProducts = {};
    const allValuesFromFilteredProducts = {};

    filterCriterias.forEach((criteria) => {
      allValuesFromAllProducts[criteria] = [];
      allValuesFromFilteredProducts[criteria] = [];
    });

    const getValueByPath = (product, path) => {
      if (path.includes(".")) {
        const keywords = path.split(".");

        let productCopy = product;
        for (let keyword of keywords) {
          if (productCopy[keyword] !== undefined) {
            productCopy = productCopy[keyword];
          } else {
            return undefined;
          }
        }
        return productCopy;
      } else {
        return product[path];
      }
    };

    allProducts.forEach((product) => {
      filterCriterias.forEach((criteria) => {
        const valueByCriteria = getValueByPath(product, criteria);
        if (valueByCriteria !== undefined) {
          if (Array.isArray(valueByCriteria)) {
            allValuesFromAllProducts[criteria].push(...valueByCriteria);
          } else {
            allValuesFromAllProducts[criteria].push(valueByCriteria);
          }
        }
      });
    });

    filteredProducts.forEach((product) => {
      filterCriterias.forEach((criteria) => {
        const valueByCriteria = getValueByPath(product, criteria);
        if (valueByCriteria !== undefined) {
          if (Array.isArray(valueByCriteria)) {
            allValuesFromFilteredProducts[criteria].push(...valueByCriteria);
          } else {
            allValuesFromFilteredProducts[criteria].push(valueByCriteria);
          }
        }
      });
    });

    return { allValuesFromAllProducts, allValuesFromFilteredProducts };
  } catch (error) {
    console.error("Error fetching filter criteria fill (by controller)", error);
    throw error;
  }
};

module.exports = { fillTheFilter };
