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
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Matrix type", path: "specifications.display.display_matrix_type" },
          { title: "Screen diagonal", path: "specifications.display.screen_diagonal" },
          { title: "Processor type", path: "specifications.processor.type" },
          { title: "Main camera MP", path: "specifications.camera.main_camera" },
          { title: "Battery capacity", path: "specifications.battery.capacity" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Smartphones };
