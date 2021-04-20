import React from "react";
import "./customButton.scss";

const CustomButton = ({ children, btn, ...otherProps }) => (
  <button className={btn ? `btn ${btn}` : "btn"} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
