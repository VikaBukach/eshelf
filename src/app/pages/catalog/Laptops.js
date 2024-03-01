import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Laptops = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("laptops"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout title="Laptops" />
    </div>
  );
};

export { Laptops };
