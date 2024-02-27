import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCheckboxesSettings } from "../../../store/slices/filterSettingsSlice";
import { NumberOfEligibleProducts } from "../NumberOfEligibleProducts/NumberOfEligibleProducts";

const CatalogFilterItem = ({ filterTitle, checkBoxNames, criteriaPath }) => {
  const dispatch = useDispatch();
  const filterSettings = useSelector((state) => state.filterSettings.checkboxes);

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

    dispatch(setCheckboxesSettings(filterSettingsToUpdate));
  };

  return (
    <div className="filter-item">
      <h5 className="filter-item__name">{filterTitle}</h5>
      {checkBoxNames.map((checkBoxName, index) => {
        return (
          <div className="filter-item__checkbox-line" key={checkBoxName + index}>
            <label className="filter-item__label">
              <input
                className="filter-item__chekbox"
                type="checkbox"
                name={checkBoxName}
                onChange={handleCheckboxChange}
              />
              {checkBoxName}
            </label>
            <NumberOfEligibleProducts number={5} />
          </div>
        );
      })}
    </div>
  );
};

export { CatalogFilterItem };
