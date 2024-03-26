const mongoose = require("mongoose");
const Smartphone = require("../models/Smartphone");

const fillTheFilter = async (collectionModel, filterSettings, filterCriterias, priceBy, priceTo) => {
  try {
    let collection;
    switch (collectionModel) {
      case "smartphones":
        collection = Smartphone;
        break;
      default:
        break;
    }

    const priceFilter = {
      ...(priceBy !== 0 && { "colors.products.price": { $gte: priceBy } }),
      ...(priceTo !== 0 && { "colors.products.price": { $lte: priceTo } }),
    };

    // const [filteredProducts, allProducts] = await Promise.all([

    //   filterSettings && Object.keys(filterSettings).length > 0
    //     ? collection.aggregate([{ $unwind: "$colors" }, { $match: filterSettings }])
    //     : collection.aggregate([{ $unwind: "$colors" }]),

    //   collection.aggregate([{ $unwind: "$colors" }])
    // ]);

    const filterByPrice = (products) => {
      const filteredProductsArray = [];

      if (priceBy !== 0 && priceTo !== 0) {
        products.forEach((product) => {

          const prices = product.colors.products.map(item => item.price);

          const minPriceInProduct = Math.min(...prices);
          const maxPriceInProduct = Math.max(...prices);

          console.log(minPriceInProduct, maxPriceInProduct);

          if (
            (minPriceInProduct >= priceBy && minPriceInProduct <= priceTo) ||
            (maxPriceInProduct >= priceBy && maxPriceInProduct <= priceTo) ||
            (minPriceInProduct <= priceBy && maxPriceInProduct >= priceBy) ||
            (minPriceInProduct <= priceTo && maxPriceInProduct >= priceTo)
          ) {
            filteredProductsArray.push(product);
          }

        })
        
        return filteredProductsArray;
      } else if (priceBy !== 0) {
        products.forEach((product) => {

          const prices = product.colors.products.map(item => item.price);

          const maxPriceInProduct = Math.max(...prices);

          console.log(minPriceInProduct, maxPriceInProduct);

          if (
            (maxPriceInProduct > priceBy) 
          ) {
            filteredProductsArray.push(product);
          }

        })
        
        return filteredProductsArray;
      } else if (priceTo !== 0) {
        products.forEach((product) => {

          const prices = product.colors.products.map(item => item.price);

          const minPriceInProduct = Math.min(...prices);

          console.log(minPriceInProduct, maxPriceInProduct);

          if (
            (minPriceInProduct < priceTo) 
          ) {
            filteredProductsArray.push(product);
          }

        })
        
        return filteredProductsArray;
      } else {
        return products;
      }
    }

    const filteredProductsPipeline = filterSettings && Object.keys(filterSettings).length > 0
    ? [{ $unwind: "$colors" }, { $match: filterSettings }]
    : [{ $unwind: "$colors" }];
    
    const filteredProducts1 = await collection.aggregate(filteredProductsPipeline);
    
    filteredProducts = filterByPrice(filteredProducts1);





    const allProducts = await collection.aggregate([
      { $unwind: "$colors" },
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
