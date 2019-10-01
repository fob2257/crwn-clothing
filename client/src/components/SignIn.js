import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SignIn.styles';

// import { fireAuth, signInWithGoogle, signInWithEmail } from '../firebase/firebase.util';
import { googleSignInStart, emailSignInStart } from '../redux/actions/userActions';

import InputField from './common/InputField';
import CustomButton from './common/CustomButton';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const { user } = await signInWithEmail(email, password);

    //   [setEmail, setPassword].map(fn => fn(''));
    // } catch (error) {
    //   console.error(error);
    // }

    emailSignInStart(email, password);

    [setEmail, setPassword].map(fn => fn(''));
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
              // signInWithGoogle();
              googleSignInStart();
            }}
            isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
