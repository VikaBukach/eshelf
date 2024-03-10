import axios from "axios";
import React, { useEffect } from "react";

const PORT = process.env.REACT_APP_PORT || 5000;

const Login = () => {
  const loginHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    try {
      const response = await axios.post(`http://localhost:${PORT}/login`, {
        ...data,
      });

      const { token, ...user } = response.data;

      console.log(user);

      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={loginHandler} action="">
      <input placeholder="email" type="email" name="email" />
      <input placeholder="password" type="password" name="password" />

      <button>Login</button>
    </form>
  );
};

const Register = () => {
  const registerHandler = async (e) => {
    console.log(e);

    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    try {
      const response = await axios.post(`http://localhost:${PORT}/register`, {
        ...data,
      });

      const { token } = response.data;

      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={registerHandler} action="">
      <input placeholder="name" type="text" name="name" />
      <input placeholder="surname" type="text" name="surname" />
      <input placeholder="email" type="email" name="email" />
      <input placeholder="password" type="password" name="password" />

      <button>Register</button>
    </form>
  );
};

const Users = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const user = await axios
          .get(`http://localhost:${PORT}/authorize`, {
            headers: {
              authorization: JSON.parse(token),
            },
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(user.data);
      };

      getUser();
    }
  }, []);

  return (
    <div>
      <Register />
      <Login />
    </div>
  );
};

export { Users };
