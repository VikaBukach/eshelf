import React from "react";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const TV = () => {

  return (
    <div>
      <CatalogLayout
        categoryName="tvs"
        title="TV"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display size", path: "specifications.display.display_size" },
          { title: "Processor", path: "specifications.processor.processor" },
          { title: "RAM", path: "specifications.memory.RAM" },
          { title: "Camera", path: "specifications.camera.main_camera" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { TV };
