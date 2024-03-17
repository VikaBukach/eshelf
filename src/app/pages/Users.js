import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import UserProfile from "./User/UserProfile";
import { setOrderNumber } from "../store/slices/orderSlice";
import "../components/UserProfile/Users.scss";

const Users = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderNumber = useSelector((state) => state.order.orderNumber);

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, [user]);

  if (!user) return null;

  console.log("orderNumber:", orderNumber);

  return (
    <div className="users-page container">
      <div className="user-info">
        <p>User: {user?.name + " " + user?.surname}</p>
        <button
          className="primary-btn"
          onClick={() => {
            dispatch(logout());
          }}
        >
          log out
        </button>
      </div>
      <UserProfile />
    </div>
  );
};

export { Users };
