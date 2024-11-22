// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="button"
      onClick={() => loginWithRedirect({ redirectUri: `${window.location.origin}/profile` })}
    >
      Log In
    </button>
  );
};

export default LoginButton;