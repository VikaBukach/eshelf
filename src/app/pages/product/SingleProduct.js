import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from "../../store/slices/singleProductSlice";
import { Link } from 'react-router-dom';

const SingleProduct = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  //console.log(products);

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  
  return (
    <div>
      <ul>
        {
          products.map(({ model, _id }) => (
            <li key={_id}>
              <Link to={`product/${_id}`}>{model}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export { SingleProduct }
