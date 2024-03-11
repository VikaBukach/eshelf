export const createUrlFromFilterSettings = (
  filterSettings,
  priceBy,
  priceTo,
  minValue,
  maxValue,
  checkedSortingValue
) => {
  let filterUrl = "";

  for (const setting in filterSettings) {
    if (filterSettings[setting].length !== 0) {
      filterUrl = filterUrl + setting.toString() + "=" + filterSettings[setting].join(",") + ";";
    }
  }

  if (priceBy !== minValue || priceTo !== maxValue) {
    filterUrl = filterUrl + "price" + "=" + priceBy.toString() + "-" + priceTo.toString() + ";";
  }

  if (checkedSortingValue !== "Best Seller") {
    filterUrl = filterUrl + "sorting" + "=" + checkedSortingValue + ";";
  }

  return filterUrl.slice(0, -1);
};

export const createFilterSettingsObjectFromUrl = (minValue, maxValue) => {
  const filterCheckboxSettings = {};
  const filterPriceSettings = {
    priceBy: minValue,
    priceTo: maxValue,
  };
  let sortingSettings = "";
  const url = window.location.search;

  console.log(url);

  if (url) {
    const parametrs = url.substring(1).split(";");

    parametrs.forEach((parametr) => {
      console.log(parametr);
      const parametrParts = parametr.split("=");
      if (parametrParts[0] === "price") {
        filterPriceSettings.priceBy = parametrParts[1].split("-")[0];
        filterPriceSettings.priceTo = parametrParts[1].split("-")[1];
      } else if (parametrParts[0] === "sorting") {
        sortingSettings = parametrParts[1].replace(/%20/g, " ");
      } else {
        filterCheckboxSettings[parametrParts[0]] = parametrParts[1].split(",");
      }
    });
  }

  console.log(sortingSettings);
  return { filterCheckboxSettings, filterPriceSettings, sortingSettings };
};
