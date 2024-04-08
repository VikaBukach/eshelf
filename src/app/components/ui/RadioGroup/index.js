import { Radio } from "../Radio";
import "./RadioGroup.scss";

export const RadioGroup = ({ options, selectedOption, onChange }) => {
  return (
    <div className={"radio-group"}>
      {options.map((option) => (
        <Radio key={option.value} {...{ ...option }} selectedOption={selectedOption} onChange={onChange} />
      ))}
    </div>
  );
};
