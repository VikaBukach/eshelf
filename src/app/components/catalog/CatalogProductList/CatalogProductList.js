import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setBaseFilteredProducts, setProductsFilteredWithPrice } from '../../../store/slices/filteredProductsSlice';

const CatalogProductList = () => {
  const products = useSelector((state) => state.products.data);
  const filteredProducts = useSelector(state => state.filteredProducts.baseFilter);
  const filteredProductsWithPrice = useSelector((state) => state.filteredProducts.filteredWithPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBaseFilteredProducts(products));
    dispatch(setProductsFilteredWithPrice(products));
  }, [products]);




  

  let productItems = [];

  filteredProductsWithPrice.forEach((product) => {
    product.colors.forEach((color) => {
      const productItem = {};
      productItem.fullName = product.brand + " " + product.model + " " + color.color;
      productItem.index = product._id + color.color;
      productItem.priceBy = color.products[0].price;
      let l = color.products.length - 1;
      productItem.priceTo = color.products[l].price;
      productItem.bool = product.test_boolean ? "Yes" : "No";
      productItem.battary_capacity = product.specifications.battery.capacity;
      productItem.capacity = [];
      let b = color.products.forEach(product => {productItem.capacity.push(product.capacity + " / ")})


      

      productItems.push(productItem);
    });
  });

  return (
      <ul className="product-list">
        {productItems.map((productItem) => (
          <li className="product-list__item" key={productItem.index}>
            <p>{productItem.fullName}</p>
            <p>-----------</p>
            <p>price by {productItem.priceBy} to {productItem.priceTo}</p>
            <p>-----------</p>
            <p>{productItem.bool}</p>
            <p>-----------</p>
            <p>{productItem.battary_capacity}</p>
            <p>-----------</p>
            <p>{productItem.capacity}</p>
            </li>
        ))}
      </ul>
  );
};

export { CatalogProductList };
