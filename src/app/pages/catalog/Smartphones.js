import React from "react";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Smartphones = () => {
  
  return (
    <div>
      <CatalogLayout
        categoryName="smartphones"
        title="Smartphones"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display frequency", path: "specifications.display.frequency" },
          { title: "Matrix type", path: "specifications.display.display_matrix_type" },
          { title: "Screen diagonal", path: "specifications.display.screen_diagonal" },
          { title: "Front camera", path: "specifications.camera.front_camera" },
          { title: "Battery capacity", path: "specifications.battery.capacity" },
          { title: "Functions", path: "specifications.camera.functions" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Smartphones };
