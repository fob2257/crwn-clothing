import React from 'react';

import './HomePage.styles.scss';

import Directory from '../components/Directory';

const HomePage = () => (
  <div className='home-page'>
    <div className='directory-menu'>
      <Directory />
    </div>
  </div>
);

export default HomePage;
