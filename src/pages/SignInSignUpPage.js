import React from 'react';

import './SignInSignUpPage.styles.scss';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const SignInSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
