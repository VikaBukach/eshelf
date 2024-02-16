import React from 'react'
import { useSelector } from 'react-redux';
import { CatalogFilterItem } from '../CatalogFilterItem/CatalogFilterItem';

const CatalogFilter = ({filterCriteria}) => {

    const products = useSelector((state) => state.products.data);
    const filteredProducts = useSelector(state => state.filteredProducts.data);





    const filterCriteriaTypes = [];

    products.forEach((product) => {
        if (!filterCriteriaTypes.includes(product.brand)) {
            filterCriteriaTypes.push(product[filterCriteria]);
        }
    });




  return (
    <div className='filter'>
        <CatalogFilterItem filterName={filterCriteria} checkBoxNames={filterCriteriaTypes}/>
        <button className='filter__submit'>FILTER</button>
    </div>
  )
}

export {CatalogFilter};


// filterCriteria - массив критериев фильтрации