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
          const keywordValues = findValueByPath(product, сriteria.path);

      //     keywordValues.forEach((keywordValue) => {
      //       if (!сriteria.types.includes(keywordValue)) {
      //         сriteria.types.push(keywordValue);
      //       }
      //     });
        });
      //   updatedFilterCriterias.push(сriteria);
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
      const searchCycle = (product) => {
        for (const characteristic in product) {
          const valueOfCharacteristic = product[keywords[i]];

          if (
            Array.isArray(valueOfCharacteristic) &&
            valueOfCharacteristic.every((value) => typeof value === "object" && value !== null)
          ) {
            i++;

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

      console.log(result);
      return result;
    };





const filterProducts = () => {
  const filteredProducts = products.forEach((product) => {

    for (const filterCharacteristic in filterSettings) {

      const findValues = findValueByPath(product, filterCharacteristic);

      if (findValues.length === 1 && !filterSettings[filterCharacteristic][findValues]) {
        console.log(findValues);
        return false;
      }

      


    };

    

  })

  // const productItems = [];

  // products.color.forEach((color) => {

  //   for (const filterCharacteristic in filterSettings) {}



  // });

  // for (const filterCharacteristic in filterSettings) {

  //   products.color.forEach((color) => {
  //     const productItem = {};

  //     findValueByKeyword

      
  //   })


  //   console.log(filterSettings[filterCharacteristic]);


  //   }
  
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
