import React from 'react';

import { SignInAndSignUpContainer } from './SignInSignUpPage.styles';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInSignUpPage;
