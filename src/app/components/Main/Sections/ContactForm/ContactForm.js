import React, {useState} from 'react';
import Button from "../../Button/Buttun_perple";
import InputMask from "../../../ui/Input/InputMask";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import "./ContactForm.scss";


function ContactForm(props) {
    const [state, setState] = useState({
        name: "",
        phone: ""
    });

    const DetailsSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        phone: Yup.string().length(17).required("Required"),
    });

    const [disabledInputs, swtDisabledInputs] = useState(false);

    const validateField = () => {

    }

    const inputs = [
        {
            key: "name",
            label: "Name",
            mask: /^[\p{L}]*$/u,
        },
        {
            key: "phone",
            label: "Phone",
            mask: "+{38}(000)000-00-00",
        },
    ];

    return (
        <div className="contact-form-footer">
            <div className="container">
                    <svg width="347" height="347" viewBox="0 0 347 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_398_8319)">
                            <path
                                d="M131.606 153.463C129.574 143.553 119.889 137.165 109.979 139.197L101.005 141.038C81.1798 145.104 68.4074 164.467 72.4736 184.293L77.9949 211.213C82.0612 231.039 101.425 243.811 121.25 239.745L130.224 237.904C140.134 235.872 146.522 226.187 144.489 216.277L131.606 153.463ZM246.877 213.978C266.703 209.912 279.475 190.549 275.409 170.723L269.888 143.803C265.822 123.977 246.458 111.205 226.633 115.271L217.659 117.112C207.749 119.144 201.361 128.829 203.393 138.739L216.276 201.553C218.309 211.463 227.994 217.851 237.904 215.819L246.877 213.978ZM143.574 29.4473C63.4754 45.8757 16.2374 125.012 29.4472 202.468L31.2876 211.442C32.3045 216.4 37.1437 219.592 42.1015 218.575L51.0748 216.734C56.0326 215.718 59.2246 210.878 58.2078 205.921L56.3673 196.947C43.1747 132.625 84.7731 69.56 149.095 56.3675C213.418 43.1749 276.482 84.7732 289.675 149.095L289.608 149.109C289.932 150.463 308.737 242.037 308.737 242.037C311.423 255.133 302.984 267.927 289.889 270.613L232.84 282.313C229.791 267.446 215.267 257.865 200.399 260.915L182.452 264.596C167.585 267.645 158.004 282.169 161.053 297.037C164.103 311.905 178.627 321.485 193.495 318.436L295.41 297.533C323.373 291.798 341.393 264.479 335.658 236.516L316.595 143.574C298.248 67.1711 223.673 13.019 143.574 29.4473Z"
                                fill="white" fill-opacity="0.2"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_398_8319">
                                <rect width="293.125" height="293.125" fill="white"
                                      transform="translate(0 58.8945) rotate(-11.5907)"/>
                            </clipPath>
                        </defs>
                    </svg>
                <div className="contact-form-footer-info">
                    <h2 className="contact-form-footer-title">NEED ADVICE?</h2>
                    <p className="contact-form-footer-text">Enter your details and write your question, we will contact
                        you
                        within 3 working days</p>
                </div>
                <div className="contact-form">
                    <Formik
                        validationSchema={DetailsSchema}
                        initialValues={{
                            name: state.name,
                            phone: state.phone,
                        }}
                        onSubmit={(values, {setFieldValue}) => {
                            setFieldValue("name", values.name);
                            setFieldValue("phone", values.phone);
                        }}
                    >
                        {({errors}) => (
                            <Form>
                                {inputs.map(input => (
                                    <div className="contact-form-input" key={input.key}>
                                        <label htmlFor={input.key} className="contact-form-label">{input.label}</label>
                                        {input.key === "phone" ? (
                                            <InputMask
                                                className="input_ui__input"
                                                validateFunction={validateField}
                                                input={input}
                                                state={state}
                                                disabled={disabledInputs}
                                                setState={(value) => {
                                                    setState((prev) => ({
                                                        ...prev,
                                                        [input.key]: value,
                                                    }));
                                                    // setFieldValue(input.key, value);
                                                }}
                                            />
                                        ) : (
                                            <Field
                                                className="input_ui__input"
                                                name={input.key}
                                                disabled={disabledInputs}
                                                value={state[input.key]}
                                                onChange={(e) => {
                                                    setState((prev) => ({
                                                        ...prev,
                                                        [input.key]: e.target.value,
                                                    }));
                                                }}
                                                onBlur={() => {
                                                    validateField(input.key);
                                                }}
                                            />
                                        )}
                                        {errors[input.key] && <div className="error-message">{errors[input.key]}</div>}
                                    </div>
                                ))}
                                <Button
                                    btnClass="contact-form-btn"
                                    type="submit"
                                    text={"Send a request"}
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

        </div>
    );
}

export default ContactForm;