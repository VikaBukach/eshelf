import "./Radio.scss";
import { classNames } from "../../../utils/classNames";

export const Radio = ({ label, onChange, value, selectedOption }) => {
  return (
    <div className={"radio_ui__inputWrapper"}>
      <div
        onClick={() => onChange(value)}
        className={classNames("radio_ui__radio", value === selectedOption ? "radio_ui__radioActive" : "")}
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
