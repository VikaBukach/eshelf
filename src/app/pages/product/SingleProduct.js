import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { fetchDataOfProducts } from '../../store/slices/productsSlice'; 

const SingleProduct = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  //console.log(products);

  useEffect(() => {
    dispatch(fetchDataOfProducts("smartphones"));
  }, [dispatch])
  
  return (
    <div>
      <ul>
        {
          products.map(({ model, _id }) => (
            <li key={_id}>
              <Link to={`/smartphones/${_id}`}>{model}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export { SingleProduct }
