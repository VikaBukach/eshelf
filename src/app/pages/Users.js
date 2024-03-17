import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import UserProfile from "./User/UserProfile";

const Users = () => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
  }, [user]);

  if (!user) return null;

  return (
    <div>
      <p>User: {user?.name + " " + user?.surname}</p>
        <UserProfile />
      <button
        className="primary-btn"
        onClick={() => {
          dispatch(logout());
        }}
      >
        log out
      </button>
    </div>
  );
};

export { Users };
