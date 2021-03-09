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
import { Routes } from "../../routes";

export default function AuthScreen() {
  const { user } = useAuth();

  // Logged in users shouldn't see auth pages.
  if (user) return <Redirect to={Routes.Dashboard} />;
  return (
    <div className="auth">
      <Logo />

      <Text className="slogan" color="muted" size={600}>
        Connect audiences to all of your content with just one link{" "}
      </Text>

      <div className="auth__forms shadow-md">
        <Button fullWidth iconBefore={GoogleIcon} height={45}>
          Continue with Google
        </Button>
        <div className="separator">
          <span>or</span>
        </div>
        <Route path={Routes.Signin}>
          <SignIn />
        </Route>
        <Route path={Routes.Signup}>
          <SignUp />
        </Route>
        <Route path={Routes.ForgotPassword}>forgot password</Route>
        <Route path="*">
          <Redirect to={Routes.Signin} />
        </Route>
      </div>
    </div>
  );
}
