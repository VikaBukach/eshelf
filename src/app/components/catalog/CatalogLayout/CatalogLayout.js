import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CatalogProductList } from "../CatalogProductList/CatalogProductList";
import { CatalogFilter } from "../CatalogFilter/CatalogFilter";
import { CatalogSorting } from "../CatalogSorting/CatalogSorting";
import { CatalogPagination } from "../CatalogPagination/CatalogPagination";
import { setCheckboxesSettings } from "../../../store/slices/filterSettingsSlice";
import { setPriceBy, setPriceTo } from "../../../store/slices/filterSettingsSlice";
import { setFilterSorting } from "../../../store/slices/filterSortingSlice";
import { createFilterSettingsObjectFromUrl, createUrlFromFilterSettings } from "../../../utils/filter-url";
import { updateBaseFilterData } from "../../../store/slices/filteredProductsSlice";
import { updateFilteredProductsWithPrice } from "../../../store/slices/filteredProductsWithPriceSlice";
import { setProductsToResrtSorting } from "../../../store/slices/filterSortingSlice";
import { fetchDataOfProducts, loadPageOfProducts, setPageOfDB, setPagesToLoading } from "../../../store/slices/productsSlice";

const CatalogLayout = ({ categoryName, title, filterCriterias, pricePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const productsDataLength = useSelector((state) => state.products.productsDataLength);
  const products = useSelector((state) => state.products.data);
  const pageOfDB = useSelector((state) => state.products.pageOfDB);
  const pagesToLoading = useSelector((state) => state.products.pagesToLoading);
  const cardsOnPage = useSelector((state) => state.products.cardsOnPage);
  const accumulatorOfCards = useSelector((state) => state.products.accumulatorOfCards);

  const isLoaded = useSelector((state) => state.page.isLoaded);



  const priceBy = useSelector((state) => state.filterSettings.priceBy);
  const priceTo = useSelector((state) => state.filterSettings.priceTo);
  const minValue = useSelector((state) => state.filterSettings.minPrice);
  const maxValue = useSelector((state) => state.filterSettings.maxPrice);
  const checkedSortingValue = useSelector((state) => state.filterSorting.mode);
  const fetchStatus = useSelector((state) => state.products.status);

  const [allSettings, setAllSettings] = useState([]);

  // ДІЇ ПО КНОПКАХ

  // Відкрити фільтр
  const openFilter = () => {
    if (window.innerWidth < 1024) {
      document.querySelector(".filter").classList.toggle("filter--open");
      document.querySelector("body").classList.toggle("body-to-filter");
      document.querySelector(".catalog__shadow").classList.toggle("catalog__shadow--open");
    }
  };

  // Видалити критерій фільтру (таблет версія)
  const deleteSetting = (event) => {
    const newFilterSettings = {};
    for (const setting in filterSettings) {
      newFilterSettings[setting] = filterSettings[setting].filter(
        (item) => item !== event.target.getAttribute("data-value")
      );
    }
    // dispatch(setCheckboxesSettings(newFilterSettings));
  };

  // ДОПОМІЖНІ ЕЛЕМЕНТИ

  // Кружечок з кількістю фільтрів (мобільна версія)
  const checkCount = () => {
    let pricePlus;
    priceBy > minValue || priceTo < maxValue ? (pricePlus = 1) : (pricePlus = 0);
    return allSettings.length + pricePlus;
  };

  // Фільтр-посилання
  const navigateToUrlWithSettings = () => {
    console.log(filterSettings);
    const url = `?${createUrlFromFilterSettings(filterSettings, priceBy, priceTo, minValue, maxValue, checkedSortingValue)}`;
    navigate(url);
  };


  // ЗМІНА СТАНІВ

  const loadToFilterAndSortingSlices = (products) => {
    dispatch(updateBaseFilterData(products));
    dispatch(updateFilteredProductsWithPrice(products));
    dispatch(setProductsToResrtSorting(products));

    if (window.location.search !== "") {
      const { filterCheckboxSettings, filterPriceSettings, sortingSettings } = createFilterSettingsObjectFromUrl(
        minValue,
        maxValue
      );

      if (sortingSettings) {
        dispatch(setFilterSorting(sortingSettings));
      }
      if (filterPriceSettings.priceBy !== 0 && filterPriceSettings.priceTo !== 0) {
        dispatch(setPriceBy(filterPriceSettings.priceBy));
        dispatch(setPriceTo(filterPriceSettings.priceTo));
      }
      if (Object.keys(filterCheckboxSettings).length !== 0) {
        dispatch(setCheckboxesSettings(filterCheckboxSettings));
      }
    }
  }

  const loadPageOfCards = () => {
    console.log("СРАБАТЫВАНИЕ ПОСЛЕ ЗАГРУЗКИ");
      console.log("Товары после загрузки:", products);

      const colors = Object.values(products).reduce((accumulator, product) => {
        return accumulator + product.colors.length;
      }, 0);

      console.log("Карточек после загрузки", colors);

      if ((pagesToLoading*cardsOnPage) >= colors) {
        console.log("КАРТОЧЕК МАЛО");

        dispatch(fetchDataOfProducts({ collection: categoryName, page: pageOfDB, limit: 1 }));
        dispatch(setPageOfDB(pageOfDB + 1));

      } else if ((pagesToLoading*cardsOnPage) < colors) {
        console.log("КАРТОЧЕК С ОСТАТКОМ");
        const difference = colors - (pagesToLoading*cardsOnPage);
        const productsWithRequiredCards = products.slice(0, -1);
        const productWithRemovedCards = { ...products[products.length - 1] };
        productWithRemovedCards.colors = productWithRemovedCards.colors.slice(0, -2);
        const productsWithCardsToDisplay = [...productsWithRequiredCards, productWithRemovedCards];
        console.log("difference", difference);
        console.log("Элементы без последнего", productsWithRequiredCards);
        console.log("Последний с скороченными карточками", productWithRemovedCards);
        console.log("Готовый массив", productsWithCardsToDisplay);
        loadToFilterAndSortingSlices(productsWithCardsToDisplay);
      } 
      else if ((pagesToLoading*cardsOnPage) == colors) {
        console.log("КАРТОЧЕК РОВНО СКОЛЬКО НАДО");
        const difference = colors - (pagesToLoading*cardsOnPage);
        console.log("difference", difference);
      }
  }





// При ЗАВАНТАЖЕННІ сторінки, тобто, ОДИН раз
  useEffect(() => {
    // console.log("ПЕРВАЯ ЗАГРУЗКА ПРИ ЗАПУСКЕ СТРАНИЦЫ");
    dispatch(loadPageOfProducts({ collection: categoryName, page: 1, limit: 1 }));
    // dispatch(setPageOfDB(pageOfDB + 1));
  }, []);



  useEffect(() => {
    if (fetchStatus === "succeeded") {

      const colorsInProducts = products.reduce((accumulator, product) => {
        return accumulator + product.colors.length;
      }, 0);

      // console.log("ЦВЕТОВ А ПРОДУКТАХ СЕЙЧАС", colorsInProducts);

      if ((cardsOnPage * pagesToLoading > colorsInProducts) && (products.length !== productsDataLength)) {
        dispatch(loadPageOfProducts({ collection: categoryName, page: pageOfDB, limit: 1 }));
        // console.log("case 1");
      } 
      if (cardsOnPage * pagesToLoading === colorsInProducts || products.length === productsDataLength) {
        // console.log("case 2");
        // console.log(products);
        dispatch(updateBaseFilterData(products));
        dispatch(updateFilteredProductsWithPrice(products));
        dispatch(setProductsToResrtSorting(products));
      } 

  }
  }, [fetchStatus]);


  const onClickLoadMore = () => {
    console.log("-------------------------------------------");
    dispatch(setPagesToLoading(pagesToLoading + 1));
    dispatch(loadPageOfProducts({ collection: categoryName, page: pageOfDB, limit: 1 }));

  }




  // При завантаженні товарів
  // useEffect(() => {
  //   if (fetchStatus === "succeeded") {
  //     loadToFilterAndSortingSlices(products);
  //   }
  // }, [fetchStatus]);

  // useEffect(() => {
  //   setAllSettings(Object.values(filterSettings).flat());
  //   if (filterSettings.length !== 0 || priceBy !== minValue || priceTo !== maxValue) {
  //     navigateToUrlWithSettings();
  //   }
  // }, [filterSettings]);

  return (
    <div className="catalog">
      <div className="catalog__shadow"></div>
      <div className="catalog__head-line">
        <div className="catalog__head-line__head">
          <p className="catalog__head-line__breadcrumb">˂ Breadcrumb</p>
          <h3 className="catalog__head-line__title">{title}</h3>
        </div>
        <div className="catalog__head-line__container">
          <button className="catalog__head-line__filter-btn" type="button" onClick={openFilter}>
            <img className="catalog__head-line__filter-btn__img" src="../assets/icons/filter.svg" alt="Icon" />
            Filter
            <div className="catalog__head-line__filter-btn__count">{checkCount()}</div>
          </button>
          <CatalogSorting className="catalog__head-line__sorting" />
        </div>
        <ul className="catalog__filter-settings">
          {allSettings.map((setting, index) => (
            <li className="catalog__filter-settings__item" key={index}>
              {setting}
              <img
                className="catalog__filter-settings__close"
                src="../assets/icons/close2.svg"
                alt="Icon"
                data-value={setting}
                onClick={deleteSetting}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="catalog__body">
        <CatalogFilter categoryName={categoryName} filterCriterias={filterCriterias} pricePath={pricePath} />
        <div className="catalog__body__list">
          <CatalogProductList />
          <CatalogPagination onClickFunc={onClickLoadMore}/>
        </div>
      </div>
    </div>
  );
};

export { CatalogLayout };
