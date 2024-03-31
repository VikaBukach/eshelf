import React from "react";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Laptops = () => {

  return (
    <div>
      <CatalogLayout
        categoryName="laptops"
        title="Laptops"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display size", path: "specifications.display_size" },
          { title: "Processor", path: "specifications.processor.type" },
          { title: "Storage", path: "specifications.storage" },
          { title: "Graphics", path: "specifications.graphics" },
          { title: "Operating system", path: "specifications.operating_system.type" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Laptops };
