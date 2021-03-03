import { Text } from "evergreen-ui";
import React from "react";
import Logo from "../../components/logo/Logo";
import "./auth-layout.scss";

export default function AuthLayout(props) {
  return (
    <div className="auth">
      <Logo />

      <Text className="slogan" color="muted" size={500}>
        Connect audiences to all of your content with just one link{" "}
      </Text>

      <div className="auth__forms">{props.children}</div>
    </div>
  );
}
