export const createUrlFromFilterSettings = (filterSettings, priceBy, priceTo, sortingMode) => {
  let filterUrl = "";

  for (const setting in filterSettings) {
    if (filterSettings[setting].length !== 0) {
      filterUrl = filterUrl + setting.toString() + "=" + filterSettings[setting].join(",") + ";";
    }
  }

  if (priceBy !== 0 || priceTo !== 0) {
    filterUrl =
      filterUrl +
      "price" +
      "=" +
      (priceBy !== 0 ? priceBy.toString() : "0") +
      "-" +
      (priceTo !== 0 ? priceTo.toString() : "0") +
      ";";
  }

  if (sortingMode !== "Best Seller") {
    filterUrl = filterUrl + "sorting" + "=" + sortingMode + ";";
  }

  return filterUrl.slice(0, -1);
};

export const createFilterSettingsObjectFromUrl = (locationUrl) => {
  const filterCheckboxSettings = {};
  const filterPriceSettings = {
    priceBy: 0,
    priceTo: 0,
  };
  let sortingSettings = "Best Seller";

  if (locationUrl) {
    const parametrs = locationUrl.substring(1).split(";");

    parametrs.forEach((parametr) => {
      const parametrParts = parametr.split("=");
      if (parametrParts[0] === "price") {
        filterPriceSettings.priceBy = parseInt(parametrParts[1].split("-")[0]);
        filterPriceSettings.priceTo = parseInt(parametrParts[1].split("-")[1]);
      } else if (parametrParts[0] === "sorting") {
        sortingSettings = parametrParts[1].replace(/%20/g, " ");
      } else {
        let values = parametrParts[1].split(",");
        values = values.map((value) => value.replace(/%20/g, " "));

        filterCheckboxSettings[parametrParts[0]] = values;
      }
    });
  }

  return { filterCheckboxSettings, filterPriceSettings, sortingSettings };
};
