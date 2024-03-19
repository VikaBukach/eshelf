import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCheckboxesSettings } from "../../../store/slices/filterSettingsSlice";
import { NumberOfEligibleProducts } from "../NumberOfEligibleProducts/NumberOfEligibleProducts";
import { Accordion } from "../../ui/Accordion/Accordion";
import { findValueByPath } from "../../../helpers/catalog";
import { findNumberOfValue } from "../../../store/slices/productsSlice";

const CatalogFilterItem = ({ filterTitle, checkBoxNames, criteriaPath }) => {
  const dispatch = useDispatch();

  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);
  const filteredProductsWithPrice = useSelector((state) => state.filteredProductsWithPrice.data);
  const numberOfValues = useSelector((state) => state.filterSettings.numberOfValues);
  
  const filterSettingsToUpdate = { ...filterSettings };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (!filterSettingsToUpdate[criteriaPath]) {
      filterSettingsToUpdate[criteriaPath] = [];
    }
    if (checked) {
      filterSettingsToUpdate[criteriaPath] = [...filterSettingsToUpdate[criteriaPath], name];
    }
    if (!checked) {
      filterSettingsToUpdate[criteriaPath] = filterSettingsToUpdate[criteriaPath].filter((item) => item !== name);
    }

    console.log(filterSettingsToUpdate);
    dispatch(setCheckboxesSettings(filterSettingsToUpdate));
  };

  // Складання масиву з усіх значень (з повтореннями) згідно з шляхом пошуку
  const findAllValues = (array, path) => {
    const valuesOfCriteria = [];
    array.forEach((product) => {
      const { value: findVariations } = findValueByPath(product, path);
      valuesOfCriteria.push(...findVariations);
    });
    return valuesOfCriteria;
  };

  const isCheckboxChecked = (checkBoxName) => {
    if (filterSettings[criteriaPath]) {
      return filterSettings[criteriaPath].includes(checkBoxName);
    } else {
      return false;
    }
  };

  const findNumberOfValue = (name) => {
    const numberOfValue = findAllValues(filteredProductsWithPrice, criteriaPath).reduce((accumulator, currentValue) => {
      if (currentValue === name) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
    return numberOfValue;
  };

  return (
    <Accordion
      title={filterTitle}
      content={
        <div className="filter-item">
          {checkBoxNames.map((checkBoxName, index) => {
            return (
              <div className="filter-item__checkbox-line" key={checkBoxName + index}>
                <label className="filter-item__label">
                  <input
                    className="filter-item__chekbox"
                    type="checkbox"
                    name={checkBoxName}
                    checked={isCheckboxChecked(checkBoxName)}
                    onChange={handleCheckboxChange}
                    disabled={numberOfValues[criteriaPath][checkBoxName] === 0 ? true : false}
                  />
                  <span
                    className={`filter-item__custom-checkbox ${isCheckboxChecked(checkBoxName) ? "filter-item__custom-checkbox--checked" : ""} ${numberOfValues[criteriaPath][checkBoxName] === 0 ? "filter-item__custom-checkbox--disabled" : ""}`}
                  ></span>
                  {checkBoxName}
                </label>
                <NumberOfEligibleProducts number={numberOfValues[criteriaPath][checkBoxName]} />
              </div>
            );
          })}
        </div>
      }
    />
  );
};

export { CatalogFilterItem };
