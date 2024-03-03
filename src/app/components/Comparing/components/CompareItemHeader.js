import { useDispatch } from "react-redux";
import { toggleCompare } from "../../../store/slices/compareSlice";
import style from "../Comparing.module.scss";

export const CompareItemHeader = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.compareHeader}>
      <button
        onClick={() => {
          dispatch(toggleCompare(item));
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.01099 22.9901L16.0012 16M22.9913 9.00977L16.0012 16M16.0012 16L9.01099 9.00977M16.0012 16L22.9913 22.9901"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};
