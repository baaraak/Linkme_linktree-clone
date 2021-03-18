import { Alert, Strong, Text } from 'evergreen-ui';
import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import Button from 'components/button/Button';
import Logo from 'components/logo/Logo';
import './styles.scss';
import GoogleIcon from 'icons/Google';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'context/auth.context';
import { Routes } from 'routes';
import { GOOGLE_CLIENT_ID } from 'services/constants';

export default function AuthScreen() {
  const { user, googleAuth } = useAuth();

  const onGoogleAuthResponse = (res) => {
    if (res.tokenId) {
      googleAuth({ tokenId: res.tokenId });
    }
  };
  const { signIn, loaded } = useGoogleLogin({
    onSuccess: onGoogleAuthResponse,
    onFailure: onGoogleAuthResponse,
    clientId: GOOGLE_CLIENT_ID,
  });

  // Logged in users shouldn't see auth pages.
  if (user) return <Redirect to={Routes.Dashboard} />;
  return (
    <div className="auth">
      <Logo />

      <Text className="slogan" color="muted" size={600}>
        Connect audiences to all of your content with just one link{' '}
      </Text>

      <div className="auth__forms shadow-md">
        <Button
          fullWidth
          iconBefore={GoogleIcon}
          isLoading={!loaded}
          height={45}
          onClick={signIn}
        >
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
      </div>
      <Alert
        appearance="card"
        marginTop={25}
        title={
          <div>
            <span style={{ marginRight: '20px' }}>
              <Strong>Email:</Strong>&nbsp;&nbsp;
              <Text>admin@gmail.com</Text>
            </span>
            <br />
            <Strong>Password:</Strong>&nbsp;&nbsp;
            <Text>123123</Text>
          </div>
        }
      />
    </div>
  );
}
