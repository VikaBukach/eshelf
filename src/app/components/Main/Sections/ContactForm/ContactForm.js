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