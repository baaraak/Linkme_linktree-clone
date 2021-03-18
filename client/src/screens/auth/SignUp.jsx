import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, Controller } from 'react-hook-form';
import { TextInputField, Link, Alert } from 'evergreen-ui';
import { Link as RouterLink } from 'react-router-dom';
import React, { useState } from 'react';
import { signupSchema } from 'services/validations';
import Button from 'components/button/Button';
import { useAuth } from 'context/auth.context';

export default function SignUp() {
  const { control, handleSubmit, errors } = useForm({
    resolver: joiResolver(signupSchema),
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState();
  const { register } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await register(data);
    } catch (err) {
      setApiError(err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!!apiError && <Alert intent="danger" marginBottom={15} title={apiError} />}
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextInputField
            label="Username"
            inputHeight={40}
            isInvalid={!!errors.username}
            validationMessage={errors.username?.message}
            type="text"
            onChange={onChange}
            value={value}
            placeholder="https://linkme.com/[username]"
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextInputField
            label="Email"
            isInvalid={!!errors.email}
            inputHeight={40}
            validationMessage={errors.email?.message}
            type="email"
            onChange={onChange}
            value={value}
            placeholder="Email"
          />
        )}
      />

      <Controller
        name="fullName"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextInputField
            label="Full name"
            isInvalid={!!errors.fullName}
            inputHeight={40}
            validationMessage={errors.fullName?.message}
            type="text"
            onChange={onChange}
            value={value}
            placeholder="Full name"
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
            inputHeight={40}
            validationMessage={errors.password?.message}
            type="password"
            placeholder="Password"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Button fullWidth isLoading={loading} appearance="primary" height={40}>
        Create Account
      </Button>
      <Link is={RouterLink} to="/auth/signin" className="toggleLink" size={500}>
        Already have an account?
      </Link>
    </form>
  );
}
