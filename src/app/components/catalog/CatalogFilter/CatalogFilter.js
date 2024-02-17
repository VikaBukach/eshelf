import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { CatalogFilterItem } from '../CatalogFilterItem/CatalogFilterItem';

const CatalogFilter = ({filterCriterias}) => {


  // [
  //   { title: "Brand", keyword: "brand" },
  //   { title: "Battery Capacity", keyword: "specifications.battery.capacity" },
  //   { title: "Color", keyword: "color" }
  // ]

    const products = useSelector((state) => state.products.data);
    const filteredProducts = useSelector(state => state.filteredProducts.data);

    const [filterCriteriasWithTypes, setfilterCriteriasWithTypes] = useState([]);


    

    


    const addTypesToFilterCriterias = () => {
      const updatedFilterCriterias = [];

      filterCriterias.forEach((сriteria) => {
        сriteria.types = [];

        products.forEach((product) => {

          const keywordValue = findValueByKeyword(product, сriteria.keyword);
          if (!сriteria.types.includes(keywordValue)) {
            сriteria.types.push(keywordValue);
          }
        });
        updatedFilterCriterias.push(сriteria);
      });

      return updatedFilterCriterias;
    };

    const findValueByKeyword = (product, keyword) => {
      if (product.hasOwnProperty(keyword)) {
        return product[keyword];
      }

      for (const characteristic in product) {
        if (typeof product[characteristic] === "object") {

          const result = findValueByKeyword(product[characteristic], keyword);
            if (result !== undefined) {
                return result;
            }
          
        }
      }
    };

    


    useEffect(() => {
      setfilterCriteriasWithTypes(addTypesToFilterCriterias());
    }, [filterCriterias, products]);





    return (
      <div className='filter'>
        {filterCriteriasWithTypes.map((criteria) => (
          <CatalogFilterItem key={criteria.title} filterTitle={criteria.title} checkBoxNames={criteria.types} />
        ))}
        <button className='filter__submit'>FILTER</button>
      </div>
    );


}

export {CatalogFilter};
