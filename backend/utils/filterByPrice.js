const filterByPrice = (products, priceBy, priceTo) => {
  const filteredProductsArray = [];

  if (priceBy != 0 && priceTo != 0) {
    products.forEach((product) => {
      const prices = product.colors.products.map((item) => item.price);

      const minPriceInProduct = Math.min(...prices);
      const maxPriceInProduct = Math.max(...prices);

      if (
        (minPriceInProduct >= priceBy && minPriceInProduct <= priceTo) ||
        (maxPriceInProduct >= priceBy && maxPriceInProduct <= priceTo) ||
        (minPriceInProduct <= priceBy && maxPriceInProduct >= priceBy) ||
        (minPriceInProduct <= priceTo && maxPriceInProduct >= priceTo)
      ) {
        filteredProductsArray.push(product);
      }
    });

    return filteredProductsArray;
  } else if (priceBy != 0 && priceTo == 0) {
    products.forEach((product) => {
      const prices = product.colors.products.map((item) => item.price);

      const maxPriceInProduct = Math.max(...prices);

      if (maxPriceInProduct > priceBy) {
        filteredProductsArray.push(product);
      }
    });

    return filteredProductsArray;
  } else if (priceBy == 0 && priceTo != 0) {
    products.forEach((product) => {
      const prices = product.colors.products.map((item) => item.price);

      const minPriceInProduct = Math.min(...prices);

      if (minPriceInProduct < priceTo) {
        filteredProductsArray.push(product);
      }
    });

    return filteredProductsArray;
  } else {
    return products;
  }
};

module.exports = { filterByPrice };
