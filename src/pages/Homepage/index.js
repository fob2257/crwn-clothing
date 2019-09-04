import React from './node_modules/react';

import './styles.scss';

import Directory from '../../components/Menu/Directory';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <Directory />
    </div>
  </div>
);

export default HomePage;
