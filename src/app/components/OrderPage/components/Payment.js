import { RadioGroup } from "../../ui/RadioGroup";
import "../Order.scss";

export const Payment = ({ state, setState }) => {
  const paymentOptions = [
    {
      label: "Google Pay",
      value: "googlePay",
    },
    {
      label: "Privat Pay",
      value: "privatPay",
    },
    {
      label: "Binance",
      value: "binance",
    },
    {
      label: "Bank card",
      value: "bankCard",
    },
  ];

  return (
    <div className={"orderPage__payment"}>
      <RadioGroup
        options={paymentOptions}
        selectedOption={state.paymentMethod}
        onChange={(val) => {
          setState((prev) => ({
            ...prev,
            paymentMethod: val,
          }));
        }}
      />
    </div>
  );
};
