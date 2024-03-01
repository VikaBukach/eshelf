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

export { isContainArrayOfObjects, normalizeValue, findValueByPath };
