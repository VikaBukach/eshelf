import { useSelector } from "react-redux";
import style from "./Comparing.module.scss";
import { CompareBody } from "./components/CompareBody";

export const ComparingPage = () => {
  const { data: compareData } = useSelector((state) => state.compare);

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
