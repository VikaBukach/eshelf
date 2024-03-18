import { useRef } from "react";
import "./Input.scss";

export const Input = ({ label, placeholder, onChange, value }) => {
  const inputRef = useRef();

  return (
    <div className={"input_ui__inputWrapper"}>
      <label
        style={{
          alignSelf: "start",
        }}
        onClick={() => inputRef.current.focus()}
      >
        {label}
      </label>
      <input
        className={"input_ui__input"}
        onChange={(e) => onChange(e.target.value)}
        ref={inputRef}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </div>
  );
};
