import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { CatalogFilterItem } from '../CatalogFilterItem/CatalogFilterItem';

const CatalogFilter = ({filterCriterias}) => {

    const products = useSelector((state) => state.products.data);
    const filteredProducts = useSelector(state => state.filteredProducts.data);
    const filterSettings = useSelector(state => state.filterSettings.checkboxes);

    const [filterCriteriasWithTypes, setfilterCriteriasWithTypes] = useState([]);


    const addTypesToFilterCriterias = () => {
      const updatedFilterCriterias = [];

      filterCriterias.forEach((сriteria) => {
        сriteria.types = [];

        products.forEach((product) => {
          const { findValues } = findValueByPath(product, сriteria.path);


          findValues.forEach((findValue) => {
            if (!сriteria.types.includes(findValue)) {
              сriteria.types.push(findValue);
            }
          });
        });
        updatedFilterCriterias.push(сriteria);
      });

      return updatedFilterCriterias;
    };



    const findValueByPath = (product, path) => {
      let result = [];
      const keywords = path.split(".");

      const checkValue = (value) => {
        if (typeof value === "string" || typeof value === "number") {
          result.push(value);
        } else if (typeof value === "boolean") {
          value ? result.push("Yes") : result.push("No");
        } else if (Array.isArray(value) && value.length > 0) {
          result = [...result, ...value];
        }
      };

      let i = 0;
      let isContainArrayOfObjects = false;
      const searchCycle = (product) => {
        for (const characteristic in product) {
          const valueOfCharacteristic = product[keywords[i]];

          if (
            Array.isArray(valueOfCharacteristic) &&
            valueOfCharacteristic.every((value) => typeof value === "object" && value !== null)
          ) {
            i++;
            isContainArrayOfObjects = true;

            for (const oneObjectOfValue of valueOfCharacteristic) {
              searchCycle(oneObjectOfValue);
            }
          } else if (typeof valueOfCharacteristic === "object" && !Array.isArray(valueOfCharacteristic)) {
            i++;
            searchCycle(valueOfCharacteristic);
          } else if (
            characteristic === keywords[i] &&
            valueOfCharacteristic !== undefined &&
            valueOfCharacteristic !== null
          ) {
            checkValue(valueOfCharacteristic);

            return;
          }
        }
      };

      searchCycle(product);
      return { findValues: result, isContainArrayOfObjects };
    };





const filterProducts = () => {

  

  // console.log(filterSettings);

  const filteredProducts = [];


  products.forEach((product) => {

    const arrOfResults = [];

    for (const filterCharacteristic in filterSettings) {

      const { findValues, isContainArrayOfObjects } = findValueByPath(product, filterCharacteristic);
      const isContainsChecked = Object.values(filterSettings[filterCharacteristic]).some((value) => value === true);
      const trueCharacteristics = Object.entries(filterSettings[filterCharacteristic])
        .filter(([key, value]) => value === true)
        .map(([key, value]) => key);

      // const pushToResult = (value) => {
      //   console.log(filterSettings[filterCharacteristic]);
      //   if (filterSettings[filterCharacteristic][value]) {
      //     arrOfResults.push(true);
      //   } else {
      //     arrOfResults.push(false);
      //   }
      // };


      if (isContainsChecked) {
        const isContainsAllOfChecked = trueCharacteristics.every(value => findValues.includes(value));
        arrOfResults.push(isContainsAllOfChecked);
        


        
      }
      


    }




    console.log(arrOfResults);

  })
};





    const onFilterSubmit = () => {


      filterProducts();
    };



    
  // let productItems = [];

  // productListToDisplay.forEach((product) => {
  //   product.colors.forEach((color) => {
  //     const productItem = {};
  //     productItem.fullName = product.brand + " " + product.model + " " + color.color;
  //     productItem.index = product._id + color.color;

  //     productItems.push(productItem);
  //   });
  // });





    useEffect(() => {
      setfilterCriteriasWithTypes(addTypesToFilterCriterias());
    }, [filterCriterias, products]);


    return (
      <div className='filter'>
        {filterCriteriasWithTypes.map((criteria) => (
          <>
          <CatalogFilterItem key={criteria.title} filterTitle={criteria.title} checkBoxNames={criteria.types} criteriaPath={criteria.path}/>
          <p>-----------------</p>
          </>
        ))}
        <button onClick={onFilterSubmit} className='filter__submit'>FILTER</button>
      </div>
    );


}

export {CatalogFilter};
