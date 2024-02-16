import { useRef } from "react";
import style from "./Radio.module.scss";

export const Radio = ({ label, onChange, value, selectedOption }) => {
  const inputRef = useRef();

  return (
    <div className={style.inputWrapper}>
      <input
        className={style.input}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
        type="radio"
        value={value}
        checked={value == selectedOption}
      />
      <label
        style={{
          alignSelf: "start",
        }}
        onClick={() => inputRef.current.click()}
      >
        {label}
      </label>
    </div>
  );
};
