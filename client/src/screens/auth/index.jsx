import { Link, Text, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";
import { useSpring, animated as a } from "react-spring";
import "./styles.scss";
import GoogleIcon from "../../assets/icons/Google";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Switch, Route, Redirect } from "react-router-dom";

export default function AuthScreen() {
  return (
    <div className="auth">
      <Logo />

      <Text className="slogan" color="muted" size={500}>
        Connect audiences to all of your content with just one link{" "}
      </Text>

      <div className="auth__forms">
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            <Redirect to="/signin" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
