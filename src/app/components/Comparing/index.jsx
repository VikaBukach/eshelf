import { useSelector } from "react-redux";
import style from "./Comparing.module.scss";
import { CompareBody } from "./components/CompareBody";

export const ComparingPage = () => {
  const { data: compareData, isOutOfLimit } = useSelector((state) => state.compare);

  if (compareData.length == 0) {
    return <h2>No data</h2>;
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
