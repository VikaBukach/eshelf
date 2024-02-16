import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilterSettings } from "../../../store/slices/filterSettingsSlice";


const CatalogFilterItem = ({ filterName, checkBoxNames }) => {

  const dispatch = useDispatch();
  const filterSettings = useSelector(state => state.filterSettings.checkboxes);

  const filterSettingsToUpdate = { ...filterSettings };
  filterSettingsToUpdate[filterName] = {...filterSettingsToUpdate[filterName]};

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    filterSettingsToUpdate[filterName][name] = checked;
    dispatch(setFilterSettings(filterSettingsToUpdate));
  };

  return (
    <div className="filter__cover">
      <h5 className="filter__name">{filterName}</h5>
      {checkBoxNames.map((checkBoxName) => {
        return (
          <label>
            <input type="checkbox" name={checkBoxName} onChange={handleCheckboxChange} />
            {checkBoxName}
          </label>
        );
      })}
    </div>
  );
};

export { CatalogFilterItem };

// const CheckboxInput = () => {
//     const [checkboxValues, setCheckboxValues] = useState({
//       option1: false,
//       option2: false,
//       option3: false,
//     });

//     const handleCheckboxChange = (event) => {
//       const { name, checked } = event.target;
//       setCheckboxValues({ ...checkboxValues, [name]: checked });
//     };

//     return (
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             name="option1"
//             checked={checkboxValues.option1}
//             onChange={handleCheckboxChange}
//           />
//           Option 1
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="option2"
//             checked={checkboxValues.option2}
//             onChange={handleCheckboxChange}
//           />
//           Option 2
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="option3"
//             checked={checkboxValues.option3}
//             onChange={handleCheckboxChange}
//           />
//           Option 3
//         </label>
//       </div>
//     );
//   };
