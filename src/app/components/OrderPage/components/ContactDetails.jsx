import { Input } from "../../ui/Input";
import style from "../Order.module.scss";

export const ContactDetails = ({ state, setState }) => {
  const inputs = [
    {
      key: "surname",
      label: "Surname",
      placeholder: "Enter your last name",
    },
    {
      key: "name",
      label: "Name",
      placeholder: "Enter your first name",
    },
    {
      key: "phone",
      label: "Mobile phone",
      placeholder: "Enter your phone number",
    },
    {
      key: "email",
      label: "E-mail",
      placeholder: "Enter your  email",
    },
  ];

  return (
    <div className={style.contactDetails}>
      {inputs.map((input) => (
        <Input
          label={input.label}
          placeholder={input.placeholder}
          key={input.key}
          value={state[input.key]}
          onChange={(val) => {
            setState((prev) => ({
              ...prev,
              [input.key]: val,
            }));
          }}
        />
      ))}
    </div>
  );
};
