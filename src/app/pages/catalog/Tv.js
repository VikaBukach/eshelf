import React from "react";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const TV = () => {

  return (
    <div>
      <CatalogLayout
        categoryName="tv"
        title="TV"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display size", path: "specifications.display_size" },
          { title: "Display technology", path: "specifications.display_technology" },
          { title: "Refresh rate", path: "specifications.refresh_rate" },
          { title: "Processor", path: "specifications.processor" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { TV };
