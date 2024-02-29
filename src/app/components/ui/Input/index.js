import { useRef } from "react";
import style from "./Input.module.scss";

export const Input = ({ label, placeholder, onChange, value }) => {
  const inputRef = useRef();

  return (
    <div className={style.inputWrapper}>
      <label
        style={{
          alignSelf: "start",
        }}
        onClick={() => inputRef.current.focus()}
      >
        {label}
      </label>
      <input
        className={style.input}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </div>
  );
};
