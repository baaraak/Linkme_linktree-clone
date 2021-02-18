import React from "react";
import LogoIcon from "../../assets/icons/Logo";
import "./styles.scss";

const Logo = ({}) => {
  return (
    <a href="/" className="logo">
      <LogoIcon width={50} height={50} />
      <h1>Linkme</h1>
    </a>
  );
};

export default Logo;
