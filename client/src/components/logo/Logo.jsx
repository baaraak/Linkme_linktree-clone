import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/icons/Logo";
import "./logo.scss";

const Logo = ({ small = false, size = 50 }) => {
  return (
    <Link to="/" className="logo">
      <LogoIcon width={size} height={size} />
      {!small && <h1>Linkme</h1>}
    </Link>
  );
};

export default Logo;
