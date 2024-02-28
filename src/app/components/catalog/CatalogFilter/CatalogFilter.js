import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CatalogFilterItem } from "../CatalogFilterItem/CatalogFilterItem";
import { setBaseFilteredProducts } from "../../../store/slices/filteredProductsSlice";
import { setFilteredProductsWithPrice } from "../../../store/slices/filteredProductsWithPriceSlice";
import { CatalogPriceFilter } from "../CatalogPriceFilter/CatalogPriceFilter";

import { setMinPrice, setMaxPrice } from "../../../store/slices/filterSettingsSlice";

const CatalogFilter = ({ title, filterCriterias, pricePath }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const filteredProducts = useSelector((state) => state.filteredProducts.baseFilter);
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  
  const [filterCriteriasWithTypes, setfilterCriteriasWithTypes] = useState([]);

  // ---------------------------------------------------------
  // ЗАГАЛЬНИЙ БЛОК (УНІВЕРСАЛЬНІ ФУНКЦІЇ)
  // ---------------------------------------------------------

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


  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ЗАПОВНЕННЯ БЛОКУ ФІЛЬТРУ
  // ---------------------------------------------------------

  // Пошук усіх можливих варіантів у товарах та додання результату до критеріїв пошуку
  const addVariationsToFilterCriterias = () => {
    const updatedFilterCriterias = [];

    filterCriterias.forEach((criteria) => {
      criteria.types = [];

      products.forEach((product) => {
        const { value: findVariations } = findValueByPath(product, criteria.path);

        findVariations.forEach((findVariation) => {
          if (!criteria.types.includes(findVariation)) {
            criteria.types.push(findVariation);
          }
        });
      });
      updatedFilterCriterias.push({ title: criteria.title, types: criteria.types, path: criteria.path });
    });
    return updatedFilterCriterias;
  };

  // Визначення мінімальної та максимальної ціни з фільтрованих товарів
  const findMinAndMaxPrice = (productArray) => {
    let allPrices = [];
    productArray.forEach((product) => {
      allPrices = [...allPrices, ...findValueByPath(product, pricePath).value];
    });
    return {
      minValue: isFinite(Math.min(...allPrices)) ? Math.min(...allPrices) : 0,
      maxValue: isFinite(Math.max(...allPrices)) ? Math.max(...allPrices) : 0,
    };
  };



  // Складання масиву з усіх значень (з повтореннями) згідно з шляхом пошуку 
  const findAllValues = (path) => {
    const valuesOfCriteria = [];
    filteredProductsWithPrice.forEach((product) => {
      const { value: findVariations } = findValueByPath(product, path);
      valuesOfCriteria.push(...findVariations)
    });
    return valuesOfCriteria;
};

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ОБРОБКА ФІЛЬТРАЦІЇ (ПІСЛЯ НАТИСКАННЯ КНОПКИ)
  // ---------------------------------------------------------

  const filterProducts = () => {
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
    console.log(filteredProductsArray);
    return filteredProductsArray;
  };


  const filterByPrice = () => {
    const filteredProductsArray = [];

    filteredProducts.forEach((product) => {
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
  };



  // --------------------------------------------------------
    // --------------------------------------------------------
      // --------------------------------------------------------


  // --------------------------------------------------------
    // --------------------------------------------------------
      // --------------------------------------------------------

  const onFilterSubmit = () => {
    let filteredProductsArrayBase = filterProducts();
    console.log(filteredProductsArrayBase);
    dispatch(setBaseFilteredProducts(filteredProductsArrayBase));
  
    console.log(filteredProducts);
    let filteredProductsArrayWithPrice = filterByPrice();
    dispatch(setFilteredProductsWithPrice(filteredProductsArrayWithPrice));
    console.log(filteredProductsArrayWithPrice);
  };

  const onFilterSubmitPrice = async () => {
    let filteredProductsArray =  await filterByPrice();
    // dispatch(setFilteredProductsWithPrice(filteredProductsArray));
  };


  useEffect(() => {
    onFilterSubmit();
  }, [filterSettings]);

  useEffect(() => {
    dispatch(setBaseFilteredProducts(products));
    dispatch(setFilteredProductsWithPrice(filteredProducts));
  }, [products]);

  useEffect(() => {
    setfilterCriteriasWithTypes(addVariationsToFilterCriterias());
    dispatch(setMinPrice(findMinAndMaxPrice(filteredProducts).minValue));
    dispatch(setMaxPrice(findMinAndMaxPrice(filteredProducts).maxValue));
  }, [filterCriterias, products]);

  return (
    <div className="filter">
      <CatalogPriceFilter onClickfunc={onFilterSubmitPrice} />
      {filterCriteriasWithTypes.map((criteria, index) => (
        <React.Fragment key={index}>
          <CatalogFilterItem filterTitle={criteria.title} checkBoxNames={criteria.types} criteriaPath={criteria.path} allValues={findAllValues(criteria.path)}/>
          <p>-----------------</p>
        </React.Fragment>
      ))}
      <button onClick={onFilterSubmit} className="filter__submit">
        FILTER
      </button>
    </div>
  );
};

export { CatalogFilter };

