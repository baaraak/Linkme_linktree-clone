import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Routes } from "routes";

import "./menu.scss";

export default function Menu() {
  const { pathname } = useLocation();
  return (
    <nav className="menu">
      <Link
        to={Routes.Dashboard}
        className={pathname === Routes.Dashboard ? "active" : ""}
      >
        Links
      </Link>
      <Link
        to={Routes.Appearance}
        className={pathname === Routes.Appearance ? "active" : ""}
      >
        Appearance
      </Link>
      <Link
        to={Routes.Account}
        className={pathname === Routes.Account ? "active" : ""}
      >
        Profile
      </Link>
      <Link to={Routes.Pro} className={pathname === Routes.Pro ? "active" : ""}>
        PRO
      </Link>
    </nav>
  );
}
