import React from 'react';

import './styles.scss';

import Directory from '../../components/Directory';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <Directory />
    </div>
  </div>
);

export default HomePage;
