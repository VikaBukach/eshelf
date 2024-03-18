import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const EReaders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("e-readers"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
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
