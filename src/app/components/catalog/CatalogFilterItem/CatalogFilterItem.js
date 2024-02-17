import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilterSettings } from "../../../store/slices/filterSettingsSlice";


const CatalogFilterItem = ({ filterTitle, checkBoxNames }) => {

  const dispatch = useDispatch();
  const filterSettings = useSelector(state => state.filterSettings.checkboxes);

  const filterSettingsToUpdate = { ...filterSettings };
  filterSettingsToUpdate[filterTitle] = {...filterSettingsToUpdate[filterTitle]};

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    filterSettingsToUpdate[filterTitle][name] = checked;
    dispatch(setFilterSettings(filterSettingsToUpdate));

    console.log(filterSettings);
  };

  return (
    <div className="filter__cover">
      <h5 className="filter__name">{filterTitle}</h5>
      {checkBoxNames.map((checkBoxName) => {
        return (
          <label key={checkBoxName + 1}>
            <input  type="checkbox" name={checkBoxName} onChange={handleCheckboxChange} />
            {checkBoxName}
          </label>
        );
      })}
    </div>
  );
};

export { CatalogFilterItem };
