import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Smartphones = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("smartphones"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
        title="Smartphones"
        filterCriterias={[
            { title: "Brand", keyword: "brand" },
            // { title: "Battery capacity", keyword: "capacity" },
            // { title: "Color", keyword: "color" }
          ]}
      />
    </div>
  );
};

export { Smartphones };
