import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchDataOfProducts } from "../../store/slices/productsSlice";
import { CatalogLayout } from "../../components/catalog/CatalogLayout/CatalogLayout";

const Quadcopters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataOfProducts("quadcopters"));
  }, [dispatch]);

  return (
    <div>
      <CatalogLayout
        title="Quadcopters"
        filterCriterias={[
          { title: "Brand", path: "brand" },
          { title: "Model", path: "model" },
          { title: "Color", path: "colors.color" },
          { title: "Size", path: "specifications.characteristics.size" },
          { title: "Type of management", path: "specifications.characteristics.type_of_management" },
          { title: "Max speed", path: "specifications.characteristics.max_speed" },
          { title: "Question", path: "specifications.characteristics.question" },
          { title: "Battery capacity", path: "specifications.characteristics.battery_capacity" },
          { title: "Flight time", path: "specifications.characteristics.flight_time" },
          { title: "Range of action", path: "specifications.characteristics.range_of_action" },
          { title: "Video broadcast", path: "specifications.characteristics.video_broadcast" }
        ]}
        pricePath="colors.products.price"
      />
    </div>
  );
};

export { Quadcopters };
