import React from 'react'
import { CatalogProductList } from '../CatalogProductList/CatalogProductList';
import { CatalogFilter } from '../CatalogFilter/CatalogFilter';
import { CatalogSorting } from '../CatalogSorting/CatalogSorting';

const CatalogLayout = ({title, filterCriterias, pricePath}) => {


  
  return (
    <div className='catalog'>
      <div className='catalog__head-line'>
        <h3>{title}</h3>
        <CatalogSorting />
      </div>
      <div className='catalog__body'>
        <CatalogFilter filterCriterias={filterCriterias} pricePath={pricePath}/>
        <CatalogProductList />
      </div>
        
    </div>
  )
}

export {CatalogLayout};
