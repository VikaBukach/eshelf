import React from "react";
import ReactDom from "react-dom";
import { classNames } from "../../utils/classNames";
import style from "./Modal.module.scss";

export default function Modal({ children, wrapperStyles, header, footer, onClose, active, showClose = false }) {
  if (!active || !children) return null;

  return ReactDom.createPortal(
    <div onClick={onClose} className={classNames(style.modalWrapper, style.active)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(style.modal, wrapperStyles ? wrapperStyles : style.defaultWrapperStyles)}
      >
        {showClose && <button onClick={onClose} className={style.closeIcon}></button>}
        {header}
        {children}
        {footer}
      </div>
    </div>,
    document.getElementById("modal")
  );
}
