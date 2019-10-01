import React from 'react';

import { HomePageContainer } from './HomePage.styles';

import Directory from '../components/Directory';

const HomePage = () => (
  <HomePageContainer>
    <div className='directory-menu'>
      <Directory />
    </div>
  </HomePageContainer>
);

export default HomePage;
