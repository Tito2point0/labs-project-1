// src/components/signup-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="button"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
          redirectUri: `${window.location.origin}/profile` // Ensure this matches the allowed callback URL
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;