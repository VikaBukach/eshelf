import React from "react";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Mouses = () => {
  return (
    <div>
      <CatalogLayout
        categoryName="mouses"
        title="Mouses"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Sensor type", path: "specifications.characteristics.sensor_type" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Mouses };
