import React from "react";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Headphones = () => {

  return (
    <div>
      <CatalogLayout
        categoryName="headphones"
        title="Headphones"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Type", path: "specifications.type" },
          { title: "Bluetooth version", path: "specifications.bluetooth_version" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Headphones };
