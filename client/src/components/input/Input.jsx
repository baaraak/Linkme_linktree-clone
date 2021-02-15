import React from "react";
import { Button as ButtonUI } from "evergreen-ui";

import "./styles.scss";

const Button = ({ children, className, height = 40, fullWidth, ...props }) => {
  return (
    <ButtonUI
      {...props}
      height={height}
      className={`btn ${className} ${fullWidth ? "btn-fullWidth" : ""}`}
    >
      {children}
    </ButtonUI>
  );
};

export default Button;
