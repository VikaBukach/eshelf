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

export const getFirstColumnKeys = (obj) => {
  const res = Object.entries(obj).map(([key, val]) => {
    if (Array.isArray(val)) {
      return key;
    }
    if (typeof val == "object") {
      return {
        [key]: getFirstColumnKeys(val),
      };
    }
    return key;
  });

  return res;
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
