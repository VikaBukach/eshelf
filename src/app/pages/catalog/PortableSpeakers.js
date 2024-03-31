import React from "react";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const PortableSpeakers = () => {

  return (
    <div>
      <CatalogLayout
        categoryName="portable-speakers"
        title="Portable Speakers"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Waterproof", path: "specifications.waterproof" },
          { title: "Output power", path: "specifications.output_power" },
          { title: "Frequency response", path: "specifications.frequency_response" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { PortableSpeakers };
