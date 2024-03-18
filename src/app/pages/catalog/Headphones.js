import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Headphones = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("headphones"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
        title="Headphones"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Type", path: "specifications.type" },
          { title: "Bluetooth version", path: "specifications.bluetooth_version" }
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Headphones };
