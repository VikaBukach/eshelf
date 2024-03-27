import "../Order.scss";
import { validateEmail } from "../../../utils/validateEmail";
import InputMask from "../../ui/Input/InputMask";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRef, useEffect } from "react";

const DetailsSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  surname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().length(17).required("Required"),
});

export const ContactDetails = ({
  state,
  setState,
  setValid,
  accountSettingsClass = "",
  inputContainerClass = "",
  labelClass = "",
}) => {
  const inputs = [
    {
      key: "name",
      label: "Name",
      placeholder: "Enter your first name",
      mask: /^[\p{L}]*$/u,
    },
    {
      key: "surname",
      label: "Surname",
      placeholder: "Enter your last name",
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
    },
  ];

  const formRef = useRef(null);

  useEffect(() => {
    // Update validity status outside of the render function
    setValid(formRef.current.isValid);
  }, [setValid, formRef.current]);

  return (
    <Formik
      validationSchema={DetailsSchema}
      initialValues={{
        name: state.name,
        surname: state.surname,
        email: state.email,
        phone: state.phone,
      }}
      validateOnChange={false}
      validateOnBlur={true}
      innerRef={formRef}
      isInitialValid={false}
    >
      {({ errors, validateField, setValues, isValid }) => (
        <Form>
          <div className={`${"orderPage__contactDetails"} ${accountSettingsClass}`}>
            {inputs.map((input) => (
              <div className={`${inputContainerClass}`} key={input.key}>
                <label htmlFor={input.key} className={`${labelClass} orderPage__label`}>
                  {input.label}
                </label>

                {input.key === "phone" ? (
                  <InputMask
                    validateFunction={validateField}
                    input={input}
                    state={state}
                    setState={(value) => {
                      setState((prev) => ({
                        ...prev,
                        [input.key]: value,
                      }));
                      setValues((prev) => ({
                        ...prev,
                        [input.key]: value,
                      }));
                    }}
                  />
                ) : (
                  <Field
                    className="input_ui__input"
                    name={input.key}
                    value={state[input.key]}
                    onChange={(e) => {
                      setState((prev) => ({
                        ...prev,
                        [input.key]: e.target.value,
                      }));
                      setValues((prev) => ({
                        ...prev,
                        [input.key]: e.target.value,
                      }));
                    }}
                    onBlur={() => {
                      validateField(input.key); // Trigger validation on blur
                    }}
                  />
                )}

                {errors[input.key] && <div>{errors[input.key]}</div>}
              </div>
            ))}
          </div>
        </Form>
      )}
    </Formik>
  );
};
