import { Input } from "../../ui/Input";
import { RadioGroup } from "../../ui/RadioGroup";
import style from "../Order.module.scss";

export const Delivery = ({ state, setState }) => {
  const cities = ["Kyiv", "Lviv", "Dnipro", "Odesa"];
  const options = [
    {
      label: "Pickup from our store",
      value: "store",
    },
    {
      label: "Pickup from Ukrposhta",
      value: "ukrPost",
    },
    {
      label: "Pickup from Nova Poshta",
      value: "novaPost",
    },
  ];

  return (
    <div className={style.delivery}>
      <div>
        <Input
          label={"Your city"}
          placeholder={"Choose a city"}
          value={state.city}
          onChange={(val) => {
            setState((prev) => ({
              ...prev,
              city: val,
            }));
          }}
        />
        <ul>
          {cities.map((c) => (
            <li
              onClick={() => {
                setState((prev) => ({
                  ...prev,
                  city: c,
                }));
              }}
              key={c}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Method of delivery</p>
        <RadioGroup
          options={options}
          selectedOption={state.deliveryMethod}
          onChange={(val) => {
            setState((prev) => ({
              ...prev,
              deliveryMethod: val,
            }));
          }}
        />
      </div>
    </div>
  );
};
