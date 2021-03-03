import { Link, Text, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";
import { useSpring, animated as a } from "react-spring";
import "./styles.scss";
import GoogleIcon from "../../assets/icons/Google";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { useAuth } from "../../context/auth.context";

export default function AuthScreen() {
  const { user } = useAuth();

  // Logged in users shouldn't see auth pages.
  if (user) return <Redirect to="/admin" />;
  return (
    <div className="auth">
      <Logo />

      <Text className="slogan" color="muted" size={500}>
        Connect audiences to all of your content with just one link{" "}
      </Text>

      <div className="auth__forms">
        <Route path="/auth/signin">
          <SignIn />
        </Route>
        <Route path="/auth/signup">
          <SignUp />
        </Route>
        <Route path="/auth/forgot-password">forgot password</Route>
        <Route path="*">
          <Redirect to="/auth/signin" />
        </Route>
      </div>
    </div>
  );
}
