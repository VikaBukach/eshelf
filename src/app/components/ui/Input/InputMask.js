import { useState } from "react";
import "./Input.scss";
import { IMaskInput } from "react-imask";
import { classNames } from "../../../utils/classNames";

export default function InputMask({ input, setState, state, validateFunction = () => true }) {
  const [isValid, setIsValid] = useState(true);

  return (
    <IMaskInput
      mask={input.mask}
      radix=","
      lazy={true}
      unmask={false}
      scale={0}
      min={0}
      max={100}
      onBlur={(e) => {
        setIsValid(validateFunction(e.target.value));
      }}
      value={state[input.key]}
      onAccept={(value) => {
        setState((prev) => ({
          ...prev,
          [input.key]: value,
        }));
      }}
      className={classNames("input_ui__input", !isValid ? "input_ui__error" : "")}
      placeholder={input.placeholder}
      key={input.key}
    />
  );
}
