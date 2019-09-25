import React, { useState } from 'react';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SignIn.styles';

import { fireAuth, signInWithGoogle } from '../firebase/firebase.util';

import InputField from './common/InputField';
import CustomButton from './common/CustomButton';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await fireAuth.signInWithEmailAndPassword(email, password);

      [setEmail, setPassword].map(fn => fn(''));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputField
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label='Email'
          required={true}
        />

        <InputField
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label='Password'
          required={true}
        />

        <ButtonsBarContainer>
          <CustomButton type='submit'>
            Sign In
          </CustomButton>
          <CustomButton
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
            isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
