import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CatalogFilterItem } from "../CatalogFilterItem/CatalogFilterItem";
import { updateBaseFilterData } from "../../../store/slices/filteredProductsSlice";
import { CatalogPriceFilter } from "../CatalogPriceFilter/CatalogPriceFilter";
import { findValueByPath } from "../../../helpers/catalog";
import { setCheckboxesSettings, setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { Accordion } from "../../ui/Accordion/Accordion";
import { createUrlFromFilterSettings } from "../../../utils/filter-url";
import { setMinPrice, setMaxPrice } from "../../../store/slices/filterSettingsSlice";
import { fetchDataOfProducts } from "../../../store/slices/productsSlice";

const CatalogFilter = ({ filterCriterias, pricePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.data);
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const checkedSortingValue = useSelector((state) => state.filterSorting.mode);
  const fetchStatus = useSelector((state) => state.products.status);

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

  // Прибираємо розділювальну риску на останнтому елементі
  const accordions = document.querySelectorAll(".filter .accordion");
  if (accordions.length > 1) {
    accordions[accordions.length - 1].style.borderBottom = "0px";
    accordions[accordions.length - 1].style.marginBottom = "0px";
  }

  // Фільтр-посилання при ресеті
  const navigateToUrlWithSettings = () => {
    const url = `?${createUrlFromFilterSettings([], 0, 0, 0, 0, checkedSortingValue)}`;
    navigate(url);
  };

  // ДІЇ ПО КНОПКАХ

  // Запуск базового фільтру
  const onFilterSubmit = () => {
    // dispatch(updateBaseFilterData(filterProducts()));   ПРИ ЗМІНІ ЧЕКБРКСУ ВЖЕ СПРАЦЮВАЛО
    closeFilter();
  };

  // Натиск RESET
  const onResetSubmit = () => {
    dispatch(setPriceBy(0));
    dispatch(setPriceTo(0));
    dispatch(setCheckboxesSettings([]));
    // dispatch(setMinPrice(0));
    // dispatch(setMaxPrice(0));
    // dispatch(setCheckboxesSettings([]));

    closeFilter();
    navigateToUrlWithSettings();
  };

  // Закрити фільтр (мобільна і таблет-версії)
  const closeFilter = () => {
    if (window.innerWidth < 1024) {
      document.querySelector(".filter").classList.toggle("filter--open");
      document.querySelector("body").classList.toggle("body-to-filter");
      document.querySelector(".catalog__shadow").classList.toggle("catalog__shadow--open");
    }
  };

  // ЗМІНА СТАНІВ

  // ------- На початку роботи заповнюємо параметри BASE та PRICE  згідно з товарами у PRODUCTS
  useEffect(() => {
    if (fetchStatus === "succeeded") {
      setfilterCriteriasWithTypes(addVariationsToFilterCriterias());
    }
  }, [fetchStatus]);

  // ------- ФІЛЬТРАЦІЯ ПО БАЗОВИМ ФІЛЬТРАМ - виклик функції фільтрації при зміні settings
  // useEffect(() => {
  //   dispatch(updateBaseFilterData(filterProducts()));
  // }, [baseFilterProductsStatus]);

  useEffect(() => {
    dispatch(updateBaseFilterData(filterProducts()));
  }, [filterSettings]);

  return (
    <div className="filter">
      <div className="filter__header">
        <img className="filter__header__img" src="../assets/icons/filter-dark.svg" alt="Icon" />
        <h1 className="filter__title">Filter</h1>
        <img className="filter__close-btn" src="../assets/icons/close.svg" alt="Close" onClick={closeFilter} />
      </div>
      <Accordion title="Price" content={<CatalogPriceFilter pricePath={pricePath} />} />
      {filterCriteriasWithTypes.map((criteria, index) => (
        <React.Fragment key={index}>
          <CatalogFilterItem filterTitle={criteria.title} checkBoxNames={criteria.types} criteriaPath={criteria.path} />
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
