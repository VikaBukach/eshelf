import InputMask from "../../../ui/Input/InputMask";
// import { validateEmail } from "./ValidateEmail";

import React from 'react';

const FormContactYou = ({ state, setState }) => {
    const inputs = [
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
        },
        {
            key: "message",
            label: "Message",
            placeholder: "Enter message...",
            mask: /^[\p{L}]*$/u,
        },
    ];

    return (
        <div className="form-contact">
            {inputs.map((input) => (
                <div className="form-contact-input" key={input.key}>
                    <label htmlFor={input.key}
                           className="form-contact-label"
                    >
                        {input.label}
                    </label>
                    <InputMask
                        id={input.key}
                        validateFunction={input?.validateFunction}
                        input={input}
                        setState={setState}
                        state={state}
                    />
                </div>
            ))}
        </div>
    );
};

export default FormContactYou;