import "./Input.scss";
import { IMaskInput } from "react-imask";
import { classNames } from "../../../utils/classNames";

export default function InputMask({ input, setState, state, validateFunction = () => true }) {
  return (
    <>
      <IMaskInput
        mask={input.mask}
        radix=","
        lazy={true}
        unmask={false}
        scale={0}
        min={0}
        max={100}
        onBlur={(e) => {
          validateFunction(input.key);
        }}
        value={state[input.key]}
        onAccept={(value) => setState(value)}
        className={classNames("input_ui__input")}
        placeholder={input.placeholder}
        key={input.key}
      />
    </>
  );
}
