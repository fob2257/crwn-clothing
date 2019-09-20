import React, { useState } from 'react';

import './SignIn.styles.scss';

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
    <div className='sign-in'>
      <h2>I already have an account</h2>
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

        <div className='buttons'>
          <CustomButton type='submit'>
            Sign In
          </CustomButton>
          <CustomButton
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle();
            }}
            isGoogleSignIn={true}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
