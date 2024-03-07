import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CatalogFilterItem } from "../CatalogFilterItem/CatalogFilterItem";
import { updateBaseFilterData } from "../../../store/slices/filteredProductsSlice";
import { CatalogPriceFilter } from "../CatalogPriceFilter/CatalogPriceFilter";
import { findValueByPath } from "../../../helpers/catalog";
import { setCheckboxesSettings, setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { Accordion } from "../../ui/Accordion/Accordion";

const CatalogFilter = ({ filterCriterias, pricePath }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.data);
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);

  const [filterCriteriasWithTypes, setfilterCriteriasWithTypes] = useState([]);

  // ЗАПОВНЕННЯ БЛОКУ ФІЛЬТРУ
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

  // Складання масиву з усіх значень (з повтореннями) згідно з шляхом пошуку
  const findAllValues = (path) => {
    const valuesOfCriteria = [];
    filteredProductsWithPrice.forEach((product) => {
      const { value: findVariations } = findValueByPath(product, path);
      valuesOfCriteria.push(...findVariations);
    });
    return valuesOfCriteria;
  };

  // ОБРОБКА ФІЛЬТРАЦІЇ (ПІСЛЯ НАТИСКАННЯ КНОПКИ)

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
    return filteredProductsArray;
  };

  // ------- На початку роботи заповнюємо параметри BASE та PRICE  згідно з товарами у PRODUCTS
  useEffect(() => {
    setfilterCriteriasWithTypes(addVariationsToFilterCriterias());
  }, [products]);

  // ------- ВЗАЄМОДІЯ З КОРИСТУВАЧЕМ

  const onFilterSubmit = () => {
    dispatch(updateBaseFilterData(filterProducts()));
    closeFilter();
  };

  const onResetSubmit = () => {
    dispatch(setCheckboxesSettings([]));
    dispatch(setPriceBy(minValue));
    dispatch(setPriceTo(maxValue));
    closeFilter();
  };

  const closeFilter = () => {
    document.querySelector(".filter").classList.toggle("filter--open");
    document.querySelector("body").classList.toggle("body-to-filter");
  };

  // ------- ФІЛЬТРАЦІЯ ПО БАЗОВИМ ФІЛЬТРАМ - виклик функції фільтрації при зміні settings
  useEffect(() => {
    dispatch(updateBaseFilterData(filterProducts()));
  }, [filterSettings]);

  return (
    <div className="filter">
      <div className="filter__header">
        <h1 className="filter__title">Filter</h1>
        <img className="filter__close-btn" src="../assets/icons/close.svg" alt="Close" onClick={closeFilter} />
      </div>
      <Accordion title="Price" content={<CatalogPriceFilter pricePath={pricePath} />} />
      {filterCriteriasWithTypes.map((criteria, index) => (
        <React.Fragment key={index}>
          <CatalogFilterItem
            filterTitle={criteria.title}
            checkBoxNames={criteria.types}
            criteriaPath={criteria.path}
            allValues={findAllValues(criteria.path)}
          />
        </React.Fragment>
      ))}
      <div className="filter__buttons">
        <button onClick={onResetSubmit} type="button" className="filter__reset filter__btn">
          Reset
        </button>
        <button onClick={onFilterSubmit} type="button" className="filter__submit filter__btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export { CatalogFilter };
