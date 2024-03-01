import style from "../Order.module.scss";
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
    <div className={style.contactDetails}>
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

// import { IMaskInput } from "react-imask";
// import style from "../Order.module.scss";

// export const ContactDetails = ({ state, setState }) => {
//   const inputs = [
//     {
//       key: "surname",
//       label: "Surname",
//       placeholder: "Enter your last name",
//       mask: String,
//     },
//     {
//       key: "name",
//       label: "Name",
//       placeholder: "Enter your first name",
//     },
//     {
//       key: "phone",
//       label: "Mobile phone",
//       placeholder: "Enter your phone number",
//     },
//     {
//       key: "email",
//       label: "E-mail",
//       placeholder: "Enter your  email",
//     },
//   ];

//   return (
//     <div className={style.contactDetails}>
//       {inputs.map((input) => (
//         <IMaskInput
//           mask={input.type}
//           label={input.label}
//           placeholder={input.placeholder}
//           key={input.key}
//           value={state[input.key]}
//           onChange={(val) => {
//             setState((prev) => ({
//               ...prev,
//               [input.key]: val,
//             }));
//           }}
//         />
//       ))}
//     </div>
//   );
// };
