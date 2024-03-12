import React from "react";
import "./Button.scss";

function Button({ btnClass, onClick, text, svg }) {
  return (
    <button className={btnClass} onClick={onClick}>
      <div className="btn-text">
        {text}
          {svg && <span className="btn-svg">{svg}</span>}
      </div>
    </button>
  );
}

export default Button;
