import React, { useEffect } from "react"; // додав підрахунок товарів
import { useDispatch, useSelector } from "react-redux";
import style from "./Comparing.module.scss";
import { CompareBody } from "./components/CompareBody";
import { setCompareTotal } from "../../store/slices/navMenuSlice"; // додав підрахунок товарів

export const ComparingPage = () => {
  const dispatch = useDispatch(); // додав підрахунок товарів
  const { data: compareData } = useSelector((state) => state.compare);

  useEffect(() => {
    dispatch(setCompareTotal(compareData.length)); // додав підрахунок товарів
  }, [dispatch, compareData]);

  if (compareData.length === 0) {
    return (
      <div className="container">
        <div className={style.comparing}>
          <h2 className={style.comparingOneMore}>No products have been selected for comparison. </h2>
        </div>
      </div>
    );
  }
  if (compareData.length === 1) {
    return (
      <div className="container">
        <div className={style.comparing}>
          <h2 className={style.comparingOneMore}>You need to select one more product for comparison</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className={style.comparing}>
        <h1>Product comparing</h1>
        <div className={style.comparingBody}>
          <CompareBody data={compareData} />
        </div>
      </div>
    </div>
  );
};
