import React, { useState } from 'react';

import './styles.scss';

import InputField from '../common/InputField';
import CustomButton from '../common/CustomButton';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    [setEmail, setPassword].map(fn => fn(''));
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
        />

        <InputField
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label='Password'
        />

        <CustomButton type='submit'>
          Sign In
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
