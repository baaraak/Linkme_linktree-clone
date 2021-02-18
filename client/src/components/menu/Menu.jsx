import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import "./menu.scss";

export default function Menu() {
  const { pathname } = useLocation();
  return (
    <nav className="menu">
      <Link to="/admin/" className={pathname === "/admin" ? "active" : ""}>
        Links
      </Link>
      <Link
        to="/admin/appearance"
        className={pathname === "/admin/appearance" ? "active" : ""}
      >
        Appearance
      </Link>
      <Link
        to="/admin/settings"
        className={pathname === "/admin/settings" ? "active" : ""}
      >
        Settings
      </Link>
      <Link
        to="/admin/pro"
        className={pathname === "/admin/pro" ? "active" : ""}
      >
        PRO
      </Link>
    </nav>
  );
}
