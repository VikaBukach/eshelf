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
      <CatalogLayout
        title="Laptops"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display size", path: "specifications.display_size" },
          { title: "Processor", path: "specifications.processor" },
          { title: "Storage", path: "specifications.storage" },
          { title: "Graphics", path: "specifications.graphics" },
          { title: "Operating system", path: "specifications.operating_system" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Laptops };
