import style from "./Order.module.scss";
import { Input } from "../ui/Input";
import { Radio } from "../ui/Radio";
import { useState } from "react";
import { RadioGroup } from "../ui/RadioGroup";

const OrderPage = () => {
  const [selectedRadio, setSelectedRadio] = useState();

  const options = [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
  ];

  return (
    <div className={style.pageOrder}>
      <div className="container">
        <h3 className={style.pageTitle}>Details</h3>
        <Input label={"test"} placeholder={"test"} />
        <RadioGroup options={options} onChange={setSelectedRadio} selectedOption={selectedRadio} />
      </div>
    </div>
  );
};
export { OrderPage };
