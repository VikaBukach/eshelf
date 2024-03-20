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
          { title: "Boolean Test", path: "test_boolean" },
          { title: "Functions", path: "specifications.camera.functions" },
          { title: "Display_matrix_type", path: "specifications.display.display_matrix_type" },
          { title: "Capacity", path: "colors.products.capacity" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Smartphones };
