import React from "react";
import "./Button_perple.scss";

function Button({ btnClass, onClick, text }) {
  return (
    <button className={btnClass} onClick={onClick}>
      <div className="btn-text">{text}</div>
    </button>
  );
}

export default Button;
