import { Link, Text, TextInputField } from "evergreen-ui";
import { Link as RouterLink } from "react-router-dom";
import React, { useState } from "react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, Controller } from "react-hook-form";
import { signinSchema } from "../../validations/auth.validation";
import GoogleIcon from "../../assets/icons/Google";
import Button from "../../components/button/Button";

export default function SignIn() {
  const { control, handleSubmit, errors } = useForm({
    resolver: joiResolver(signinSchema),
  });

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="shadow-md">
      <Button fullWidth iconBefore={GoogleIcon}>
        Sign in with Google
      </Button>
      <div className="separator">
        <span>or</span>
      </div>

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextInputField
            label="Email"
            isInvalid={!!errors.email}
            validationMessage={errors.email?.message}
            type="email"
            onChange={onChange}
            value={value}
            placeholder="Email"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextInputField
            label="Password"
            isInvalid={!!errors.password}
            validationMessage={errors.password?.message}
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Button fullWidth type="submit" appearance="primary">
        Log in
      </Button>
      <Link
        is={RouterLink}
        color="neutral"
        className="resetPassword"
        size={300}
        to="forgot-password"
      >
        Forgot your password? Click to reset
      </Link>
      <Link is={RouterLink} to="/signup" className="toggleLink">
        Don't have an account?
      </Link>
    </form>
  );
}
