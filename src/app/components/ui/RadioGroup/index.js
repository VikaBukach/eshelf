import { Radio } from "../Radio";
import style from "./RadioGroup.module.scss";

export const RadioGroup = ({ options, selectedOption, onChange }) => {
  return (
    <div className={style.radioGroupWrapper}>
      {options.map((option) => (
        <Radio key={option.value} {...{ ...option }} selectedOption={selectedOption} onChange={onChange} />
      ))}
    </div>
  );
};
