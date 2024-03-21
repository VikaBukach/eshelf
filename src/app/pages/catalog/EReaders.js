import React from "react";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const EReaders = () => {
  return (
    <div>
      <CatalogLayout
      categoryName="e-readers"
        title="E-Readers"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display size", path: "specifications.display_size" },
          { title: "Resolution", path: "specifications.display_resolution" },
          { title: "Storage", path: "specifications.storage" },
          { title: "Waterproof", path: "specifications.waterproof" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { EReaders };
