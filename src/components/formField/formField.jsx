import React from "react";
import "./formField.scss";

export default function Form({ type, label, forwardRef, ...otherProps }) {
  return (
    <>
      <input
        type={type}
        ref={forwardRef}
        {...otherProps}
        className="form__field"
      ></input>
      {/* <label className="form__field__label">{label ? label : " "}</label> */}
    </>
  );
}
