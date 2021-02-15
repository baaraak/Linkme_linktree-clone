import { Link, Text, TextInputField } from "evergreen-ui";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import Logo from "../../components/logo/Logo";
import { useSpring, animated as a } from "react-spring";

import "./styles.scss";
import GoogleIcon from "../../assets/icons/Google";

export default function AuthScreen() {
  const [newUser, setNewUser] = useState(false);
  const { transform, opacity, zIndex } = useSpring({
    opacity: newUser ? 1 : 0,
    transform: `perspective(600px) rotateY(${newUser ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="auth">
      <Logo />

      <Text className="slogan" color="muted" size={500}>
        Connect audiences to all of your content with just one link{" "}
      </Text>

      <div className="forms">
        <a.form
          style={{
            opacity: opacity.interpolate((o) => 1 - o),
            transform,
            zIndex,
          }}
          className="shadow-md"
        >
          <Button fullWidth iconBefore={GoogleIcon}>
            Sign in with Google
          </Button>
          <div className="separator">
            <span>or</span>
          </div>

          <TextInputField
            label="Username or Email"
            type="text"
            placeholder="Username or Email"
          />
          <TextInputField
            label="Password"
            type="password"
            placeholder="Password"
          />
          <Button fullWidth appearance="primary">
            Log in
          </Button>
          <Link color="neutral" className="resetPassword" size={300}>
            Forgot your password? Click to reset
          </Link>
          <Text
            size={400}
            className="toggleLink"
            onClick={() => setNewUser({})}
          >
            Don't have an account?
          </Text>
        </a.form>

        <a.form
          style={{
            opacity,
            zIndex: newUser ? 1 : -1,
            transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
          }}
          className="shadow-md"
        >
          <Button fullWidth iconBefore={GoogleIcon}>
            Continue with Google
          </Button>
          <div className="separator">
            <span>or</span>
          </div>

          <TextInputField label="Username" type="text" placeholder="Username" />
          <TextInputField label="Email" type="email" placeholder="Email" />
          <TextInputField
            label="Password"
            type="password"
            placeholder="Password"
          />
          <Button fullWidth appearance="primary">
            Create Account
          </Button>
          <Text
            size={400}
            className="toggleLink"
            onClick={() => setNewUser(false)}
          >
            Already have an account?
          </Text>
        </a.form>
      </div>
    </div>
  );
}
