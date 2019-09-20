import React, { useState } from 'react';

import './SignUp.styles.scss';

import { fireAuth, createUserProfileDocument } from '../firebase/firebase.util';

import InputField from './common/InputField';
import CustomButton from './common/CustomButton';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const clearInputs = (e) => {
    e.preventDefault();

    [
      setDisplayName,
      setEmail,
      setPassword,
      setConfirmPassword,
    ].map(fn => fn(''));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('Passwords don\'t match');
    }

    try {
      const { user } = await fireAuth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName })
    } catch (error) {
      console.error(error);
    }

    clearInputs(e);
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <InputField
          type='text'
          name='displayName'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          label='Display Name'
          required={true}
        />

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

        <InputField
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label='Confirm Password'
          required={true}
        />

        <div className='buttons'>
          <CustomButton type='submit'>
            Sign Up
          </CustomButton>
          <CustomButton onClick={(e) => clearInputs(e)}>
            Clear Inputs
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
