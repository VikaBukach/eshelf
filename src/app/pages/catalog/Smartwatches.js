import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Smartwatches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("smartwatches"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
        title="Smartwatches"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display matrix type", path: "specifications.display.display_matrix_type" },
          { title: "Processor type", path: "specifications.processor.type" },
          { title: "Memory", path: "specifications.memory.memory" },
          { title: "Battery capacity", path: "specifications.battery_capacity.capacity" },
          { title: "Wireless capabilities", path: "specifications.wireless_capabilities.payment" }
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Smartwatches };