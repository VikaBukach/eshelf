import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Mouses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("mouses"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
        title="Mouses"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Sensor type", path: "specifications.characteristics.sensor_type" }
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Mouses };
