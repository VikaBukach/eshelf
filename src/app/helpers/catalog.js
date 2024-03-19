// Перевірка чи є МАССИВОМ ОБ'ЄКТІВ

const isContainArrayOfObjects = (value) => {
  return (
    Array.isArray(value) &&
    value.every((elementOfValue) => typeof elementOfValue === "object" && elementOfValue !== null)
  );
};

// Перевірка типу значення, та приведення його до потрібного формату
// НЕ массивів об'єктів! Строка, число, буль чи простий массив

const normalizeValue = (value) => {
  if (typeof value === "string" || typeof value === "number") {
    return [value];
  } else if (typeof value === "boolean") {
    if (value) {
      return ["Yes"];
    } else {
      return ["No"];
    }
  } else if (Array.isArray(value) && value.length > 0) {
    return value;
  }
};

// Знаходження ВСІХ ЗНАЧЕНЬ за ШЛЯХОМ у форматі СТРОКИ keyword.keyword.keyword
// і запис їх у массив

const findValueByPath = (product, path) => {
  let result = [];
  let i = 0;
  const keywords = path.split(".");
  let arrayOfObjects = false;

  const searchCycle = (searchArea) => {
    const valueByKey = searchArea[keywords[i]];
    // Обробка якщо массив об'єктів, і потрібне розгалуження пошуку
    if (isContainArrayOfObjects(valueByKey)) {
      arrayOfObjects = valueByKey;
      i++;
      for (const oneObjectOfValue of valueByKey) {
        searchCycle(oneObjectOfValue);
      }
    }
    // Обробка якщо це не кінцевий шлях, йдемо далі
    else if (typeof valueByKey === "object" && !Array.isArray(valueByKey) && !isContainArrayOfObjects(valueByKey)) {
      i++;
      searchCycle(valueByKey);
    }
    // Обробка якщо пройшли ланцюжок шляху і значення є
    else if (valueByKey !== undefined && valueByKey !== null) {
      const normalizeValueByKey = normalizeValue(valueByKey);
      result = [...result, ...normalizeValueByKey];
    }
  };
  searchCycle(product);
  return { value: result, arrayOfObjects: arrayOfObjects };
};

  // Визначення мінімальної та максимальної ціни з фільтрованих товарів
  const findMinAndMaxPrice = (productArray) => {
    const pricePath = "colors.products.price";
    let allPrices = [];
    productArray.forEach((product) => {
      allPrices = [...allPrices, ...findValueByPath(product, pricePath).value];
    });
    return {
      minValue: isFinite(Math.min(...allPrices)) ? Math.min(...allPrices) : 0,
      maxValue: isFinite(Math.max(...allPrices)) ? Math.max(...allPrices) : 0,
    };
  };








  const filterProducts = (products, filterSettings) => {
    const filteredProductsArray = [];
    const entriesOfFilterSettings = Object.entries(filterSettings);

    products.forEach((product) => {
      let isMatch = true;

      for (const [path, parametersOfSetting] of entriesOfFilterSettings) {
        const trueValues = parametersOfSetting;

        const { value, arrayOfObjects } = findValueByPath(product, path);

        // Відмічаємо "false" ті продукти, або частини продуктів, які нам НЕ підходять:
        if (value && trueValues.length > 0) {
          // Якщо це значення з одним варіантом вибору
          if (value.length === 1 && !trueValues.includes(value[0]) && !arrayOfObjects) {
            isMatch = false;
          }
          // Якщо це массив значень (Наприклад, список функцій)
          else if (value.length > 1 && !trueValues.every((key) => value.includes(key)) && !arrayOfObjects) {
            isMatch = false;
          }
          // Якщо є массив об'єктів: фільтрація по КОЛЬОРАХ (адже кожен є ОКРЕМИМ товаром)
          else if (path === "colors.color" && arrayOfObjects) {
            const filteredColors = arrayOfObjects.filter((colorObject) => trueValues.includes(colorObject.color));
            if (filteredColors.length === 0) {
              isMatch = false;
            } else {
              product = { ...product, colors: filteredColors };
            }
          }
          // Якщо є массив об'єктів: фільтрація по іншим критеріям
          else if (arrayOfObjects && !trueValues.some((trueValue) => value.includes(trueValue))) {
            isMatch = false;
          }
          // Прибираємо всі продукти з пустими значаннями, якщо такі є
          else if (value.length < 1) {
            isMatch = false;
          }
        }
      }
      if (isMatch) {
        filteredProductsArray.push(product);
      }
    });
    return filteredProductsArray;
  };





    // Фільтрація базового масиву по ціні
    const filterByPrice = (products, priceBy, priceTo) => {
      const filteredProductsArray = [];

      console.log('priceBy', priceBy);
      console.log('priceTo', priceTo);
      console.log('products', products);
  
      if (priceBy !== 0 && priceTo !== 0) {
        products.forEach((product) => {
          const { minValue, maxValue } = findMinAndMaxPrice([product]);
  
          if (
            (minValue >= priceBy && minValue <= priceTo) ||
            (maxValue >= priceBy && maxValue <= priceTo) ||
            (minValue <= priceBy && maxValue >= priceBy) ||
            (minValue <= priceTo && maxValue >= priceTo)
          ) {
            filteredProductsArray.push(product);
          }
        });
        return filteredProductsArray;
      } else {
        return products;
      }
    };




export { findMinAndMaxPrice, isContainArrayOfObjects, normalizeValue, findValueByPath, filterProducts, filterByPrice };
