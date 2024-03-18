import {useRef, useState} from "react";
import {useModal} from "../../hooks/useModal";
import Modal from "../Modal";
import axios from "axios";
import {useDispatch} from "react-redux";
import {login} from "../../store/slices/authSlice";
import "./Auth.scss";
import Checkbox from "../ui/Checkbox";

const REACT_APP_BACK_URL = process.env.REACT_APP_BACK_URL || 'http://localhost';

const LoginForm = ({onSuccess}) => {
    const PORT = process.env.REACT_APP_PORT || 5000;

    const [loginNotify, setLoginNotify] = useState({type: "empty"});
    const dispatch = useDispatch();
    const formRef = useRef();

    const loginHandler = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        const response = await axios.post(`${REACT_APP_BACK_URL}:${PORT}/login`, formData);

        if (response.data.type === "error") {
            setLoginNotify(response.data);
        }
        if (response.data.type === "success") {
            localStorage.setItem("token", JSON.stringify(response.data.token));

            const user = response.data;

            dispatch(login(user));
            formRef.current.reset();
            onSuccess();
        }
    };

    return (
        <form className="auth-form" ref={formRef} onSubmit={loginHandler} action="">
            {loginNotify.type === "error" ? <h2>{loginNotify.message}</h2> : ""}
            {loginNotify.type === "success" ? <h2>{loginNotify.message}</h2> : ""}

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input required placeholder="email" type="email" id="email" name="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input required autoComplete="off" id="password" placeholder="password" type="password"
                       name="password"/>
            </div>
            <button className="primary-btn">Login</button>
        </form>
    );
};

const RegisterForm = ({onSuccess}) => {
    const PORT = process.env.REACT_APP_PORT || 5000;
    const [loginNotify, setLoginNotify] = useState({type: "empty"});
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const formRef = useRef();

    const loginHandler = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        const response = await axios.post(`${REACT_APP_BACK_URL}:${PORT}/register`, formData);

        if (response.data.type === "error") {
            setLoginNotify(response.data);
        }
        if (response.data.type === "success") {
            localStorage.setItem("token", JSON.stringify(response.data.token));

            const user = response.data;

            dispatch(login(user));
            formRef.current.reset();
            onSuccess();
        }
    };

    return (
        <form className="auth-form" ref={formRef} onSubmit={loginHandler} action="">
            {loginNotify.type === "error" ? <h2>{loginNotify.message}</h2> : ""}
            {loginNotify.type === "success" ? <h2>{loginNotify.message}</h2> : ""}
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input required placeholder="name" id="name" type="text" name="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="surname">Surname:</label>
                <input required placeholder="surname" id="surname" type="text" name="surname"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input required placeholder="email" id="email" type="email" name="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input required autoComplete="off" id="password" placeholder="password" type="password"
                       name="password"/>
            </div>
            <Checkbox required={true} checked={checked} onChange={setChecked}
                      label={"Confirm terms and conditions of use"}/>
            <button className="primary-btn">Save</button>
        </form>
    );
};

const Auth = ({activator}) => {
    const {open, close, active} = useModal();
    const [modalType, setModalType] = useState("login");

    const footerComponent =
        modalType == "login" ? (
            <div>
                Dont have an account?{" "}
                <a
                    onClick={() => {
                        setModalType("registration");
                    }}
                    href="#"
                >
                    Sign up
                </a>
            </div>
        ) : (
            <div>
                Already have an account?{" "}
                <a
                    onClick={() => {
                        setModalType("login");
                    }}
                    href="#"
                >
                    Sign in
                </a>
            </div>
        );

    const headerComponent = modalType == "login" ? <h3>Sign In</h3> : <h3>Sign Up</h3>;

    return (
        <>
            <div onClick={open}>{activator}</div>
            <Modal
                showClose={true}
                active={active}
                onClose={close}
                header={<header className="auth-form__header">{headerComponent}</header>}
                footer={<footer className="auth-form__footer">{footerComponent}</footer>}
                wrapperStyles={"auth-form-wrapper"}
            >
                {modalType == "login" ? <LoginForm onSuccess={close}/> : <RegisterForm onSuccess={close}/>}
            </Modal>
        </>
    );
};

export default Auth;
