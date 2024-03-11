export const createUrlFromFilterSettings = (filterSettings, priceBy, priceTo, minValue, maxValue) => {
  let filterUrl = "";

  for (const setting in filterSettings) {
    if (filterSettings[setting].length !== 0) {
      filterUrl = filterUrl + setting.toString() + "=" + filterSettings[setting].join(",") + ";";
    }
  }

  if (priceBy !== minValue || priceTo !== maxValue) {
    filterUrl = filterUrl + "price" + "=" + priceBy.toString() + "-" + priceTo.toString() + ";";
  }
  return filterUrl.slice(0, -1);
};
