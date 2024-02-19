import style from "./Radio.module.scss";
import { classNames } from "../../../utils/classNames";

export const Radio = ({ label, onChange, value, selectedOption }) => {
  return (
    <div className={style.inputWrapper}>
      <div
        onClick={() => onChange(value)}
        className={classNames(style.radio, value === selectedOption ? style.radioActive : "")}
      ></div>
      <label
        style={{
          alignSelf: "start",
        }}
        onClick={() => onChange(value)}
      >
        {label}
      </label>
    </div>
  );
};
