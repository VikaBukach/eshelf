const groupKeys = (arr) => {
  let startObj = {};

  arr.map((obj) => {
    const [key, val] = Object.entries(obj)[0];
    if (startObj[key]) {
      startObj[key] = [...startObj[key], val];
    } else {
      startObj[key] = [val];
    }
  });

  return startObj;
};

export const humanizeText = (text) => {
  let humanizedText = text.replace(/_/g, " ");
  humanizedText = humanizedText.replace(/\b\w/g, (match) => match.toUpperCase());

  return humanizedText;
};

// Функція приймає об'єкт obj і повертає масив ключів першого стовпця
export const getFirstColumnKeys = (obj) => {
  // Створюємо новий масив, використовуючи метод Object.entries(), щоб отримати масив пар ключ-значення об'єкта
  const res = Object.entries(obj).map(([rawKey, val]) => {
    // Перетворюємо ключі, замінюючи пробіли на підкреслення
    const key = rawKey.split(" ").join("_");

    // // Якщо значення є масивом, повертаємо сам ключ
    if (Array.isArray(val)) {
      return key;
    }

    // Якщо значення є об'єктом, рекурсивно викликаємо функцію для отримання ключів першого стовпця
    if (typeof val == "object") {
      return {
        [key]: getFirstColumnKeys(val), // Виклик рекурсії
      };
    }

    // Якщо значення є простим типом даних, повертаємо ключ
    return key;
  });

  return res; // Повертаємо масив ключів першого стовпця
};

export const getFieldData = (arr) => {
  const getRowData = (obj) =>
    Object.entries(obj).map(([rawKey, val]) => {
      const key = rawKey.split(" ").join("_");

      if (Array.isArray(val)) {
        return {
          [key]: val.join("\n"),
        };
      }
      if (typeof val == "object") {
        return {
          [key]: getRowData(val),
        };
      }
      return {
        [key]: val,
      };
    });

  const res = arr.map((item) => getRowData(item.specifications));

  return groupKeys(res.flat(Infinity));
};
