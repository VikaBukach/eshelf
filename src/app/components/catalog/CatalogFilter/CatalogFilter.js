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
          const keywordValues = findValueByKeyword(product, сriteria.keyword);

          keywordValues.forEach((keywordValue) => {
            if (!сriteria.types.includes(keywordValue)) {
              сriteria.types.push(keywordValue);
            }
          });
        });
        updatedFilterCriterias.push(сriteria);
      });

      return updatedFilterCriterias;
    };

    // const findValueByKeyword = (product, keyword) => {


    //   if (product.hasOwnProperty(keyword)) {
    //     return product[keyword];
    //   }

    //   for (const characteristic in product) {
    //     if (typeof product[characteristic] === "object") {
    //       const result = findValueByKeyword(product[characteristic], keyword);
    //       if (result !== undefined) {
    //         return result;
    //       }
    //     }
    //   }
    // };


    const findValueByKeyword = (product, keyword) => {
      const result = [];

      const searchCycle = (product) => {
        for (const characteristic in product) {
          if (characteristic === keyword) {
            result.push(product[characteristic]);
          } else if (typeof product[characteristic] === "object") {
            searchCycle(product[characteristic]);
          }
        }
      };

      searchCycle(product);

      return result;
    };

    const onFilterSubmit = () => {
      console.log(filterSettings);
    };


    useEffect(() => {
      setfilterCriteriasWithTypes(addTypesToFilterCriterias());
    }, [filterCriterias, products]);


    return (
      <div className='filter'>
        {filterCriteriasWithTypes.map((criteria) => (
          <>
          <CatalogFilterItem key={criteria.title} filterTitle={criteria.title} checkBoxNames={criteria.types} />
          <p>-----------------</p>
          </>
        ))}
        <button onSubmit={onFilterSubmit()} className='filter__submit'>FILTER</button>
      </div>
    );


}

export {CatalogFilter};
