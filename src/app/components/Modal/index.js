import React from "react";
import ReactDom from "react-dom";
import { classNames } from "../../utils/classNames";
import "./Modal.scss";

export default function Modal({ children, wrapperStyles, header, footer, onClose, active, showClose = false }) {
  if (!active || !children) return null;

  return ReactDom.createPortal(
    <div onClick={onClose} className={classNames("modal", "active")}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames("modal__body", wrapperStyles ? wrapperStyles : "modal__defaultWrapperStyles")}
      >
        {showClose && <button onClick={onClose} className={"modal__closeIcon"}></button>}
        {header}
        {children}
        {footer}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
