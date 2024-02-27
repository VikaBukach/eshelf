import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Smartphones = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("smartphones"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
        title="Smartphones"
        filterCriterias={[
            { title: "Brand", path: "brand" },
            { title: "Battery Capacity", path: "specifications.battery.capacity" },
            { title: "Color", path: "colors.color" },
            { title: "Boolean Test", path: "test_boolean" },
            // { title: "Functions", path: "specifications.camera.functions" },
            { title: "Display_matrix_type", path: "specifications.display.display_matrix_type" },
            { title: "Capacity", path: "colors.products.capacity" },
          ]}
          pricePath="colors.products.price"
      />
    </div>
  );
};

export { Smartphones };
