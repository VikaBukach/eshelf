import { useState } from "react";
import { IMaskInput } from "react-imask";

export default function InputMask({ input, setState, state, validateFunction = () => true }) {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (value) => {
    setIsValid(validateFunction(value));

    setState((prevState) => ({
      ...prevState,
      [input.key]: value,
    }));
  };

  return (
    <IMaskInput
      mask={input.mask}
      radix=","
      lazy={true}
      unmask={false}
      scale={0}
      min={0}
      max={100}
      onBlur={(e) => handleChange(e.target.value)}
      onAccept={handleChange}
      value={state[input.key]}
      placeholder={input.placeholder}
      key={input.key}
    />
  );
}
