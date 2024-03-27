import React, { useEffect } from "react"; // додав підрахунок товарів
import { useDispatch, useSelector } from "react-redux";
import "./Comparing.scss";
import { CompareBody } from "./components/CompareBody";
import { setCompareTotal } from "../../store/slices/navMenuSlice"; // додав підрахунок товарів

export const ComparingPage = () => {
  const dispatch = useDispatch(); // додав підрахунок товарів
  const { data: compareData, selectedCategory } = useSelector((state) => state.compare);
  console.log(compareData);

  useEffect(() => {
    dispatch(setCompareTotal(compareData.length)); // додав підрахунок товарів
  }, [dispatch, compareData]);

  if (compareData.length === 0) {
    return (
      <div className="container">
        <div className="comparing__wrapper">
          <h2 className="comparing__empty-state-title">No products have been selected for comparison. </h2>
        </div>
      </div>
    );
  }

  if (compareData.length && selectedCategory !== "smartphones") {
    return <h3>In developing progress...</h3>;
  }

  // if (compareData.length === 1) {
  //   return (
  //     <div className="container">
  //       <div className="comparing__wrapper">
  //         <h2 className="comparing__empty-state-title">You need to select one more product for comparison</h2>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="container">
      <div className="comparing__wrapper">
        <h1>Product comparing</h1>
        {compareData.length === 1 ? (
          <h2 className="comparing__empty-state-title">You need to select one more product for comparison</h2>
        ) : (
          ""
        )}
        <div className="comparing__content">
          <CompareBody data={compareData} />
        </div>
      </div>
    </div>
  );
};
