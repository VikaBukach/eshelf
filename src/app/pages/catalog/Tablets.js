import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Tablets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("tablets"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
        title="Tablets"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display size", path: "specifications.display_size" },
          { title: "Processor", path: "specifications.processor" },
          { title: "RAM", path: "specifications.RAM" },
          { title: "Camera", path: "specifications.camera" }
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Tablets };