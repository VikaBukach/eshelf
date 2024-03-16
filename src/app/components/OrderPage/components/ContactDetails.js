import "../Order.scss";
import InputMask from "../../ui/Input/InputMask";
import { validateEmail } from "..";

export const ContactDetails = ({ state, setState }) => {
  const inputs = [
    {
      key: "surname",
      label: "Surname",
      placeholder: "Enter your last name",
      mask: /^[\p{L}]*$/u,
    },
    {
      key: "name",
      label: "Name",
      placeholder: "Enter your first name",
      mask: /^[\p{L}]*$/u,
    },
    {
      key: "phone",
      label: "Mobile phone",
      placeholder: "Enter your phone number",
      mask: "+{38}(000)000-00-00",
    },
    {
      key: "email",
      label: "E-mail",
      placeholder: "Enter your email",
      mask: /^\S*@?\S*$/,
      validateFunction: (val) => validateEmail(val),
    },
  ];

  return (
    <div className={"orderPage__contactDetails"}>
      {inputs.map((input) => (
        <InputMask
          validateFunction={input?.validateFunction}
          key={input.key}
          input={input}
          setState={setState}
          state={state}
        />
      ))}
    </div>
  );
};
