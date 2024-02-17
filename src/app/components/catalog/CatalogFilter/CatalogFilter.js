import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { CatalogFilterItem } from '../CatalogFilterItem/CatalogFilterItem';

const CatalogFilter = ({filterCriterias}) => {


  // [
  //   { title: "Brand", keyword: "brand" },
  //   { title: "Battery capacity", keyword: "capacity" },
  //   { title: "Color", keyword: "color" }
  // ]

    const products = useSelector((state) => state.products.data);
    const filteredProducts = useSelector(state => state.filteredProducts.data);

    const [filterCriteriasWithTypes, setfilterCriteriasWithTypes] = useState([]);


    

    


    const addTypesToFilterCriterias = () => {

      const aaa = [];

      filterCriterias.forEach((сriteria) => {
        сriteria.types = [];
  
        products.forEach((product) => {
  
          if (!сriteria.types.includes(product[сriteria.keyword])) {
            сriteria.types.push(product[сriteria.keyword]);
          };
          
        });
        aaa.push(сriteria);
        
      });

return aaa;

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
