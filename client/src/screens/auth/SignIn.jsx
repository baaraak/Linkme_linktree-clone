import { Alert, Link, Text, TextInputField } from 'evergreen-ui';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, Controller } from 'react-hook-form';
import { signinSchema } from 'services/validations';
import GoogleIcon from 'icons/Google';
import Button from 'components/button/Button';
import { useAuth } from 'context/auth.context';

export default function SignIn() {
  const { control, handleSubmit, errors } = useForm({
    resolver: joiResolver(signinSchema),
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await login(data);
    } catch (err) {
      setApiError(err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!!apiError && <Alert intent="danger" marginBottom={15} title={apiError} />}

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextInputField
            label="Email"
            inputHeight={40}
            isInvalid={!!errors.email}
            validationMessage={errors.email?.message}
            onChange={onChange}
            value={value}
            type="email"
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
            inputHeight={40}
            isInvalid={!!errors.password}
            validationMessage={errors.password?.message}
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Button fullWidth type="submit" appearance="primary" height={40}>
        Log in
      </Button>
      <Link
        is={RouterLink}
        color="neutral"
        className="resetPassword"
        size={400}
        to="/auth/forgot-password"
      >
        Forgot your password? Click to reset
      </Link>
      <Link is={RouterLink} to="/auth/signup" className="toggleLink" size={500}>
        Don't have an account?
      </Link>
    </form>
  );
}
