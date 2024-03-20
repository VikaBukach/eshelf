import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Monitors = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("monitors"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
        title="Monitors"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Display diagonal", path: "specifications.display.display_diagonal" },
          { title: "Frequency", path: "specifications.display.frequency" },
          { title: "Matrix type", path: "specifications.display.display_matrix_type" },
          { title: "Options", path: "specifications.additional_options.options" },
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Monitors };
