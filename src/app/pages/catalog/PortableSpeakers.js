import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const PortableSpeakers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("portable-speakers"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
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
