import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
      <h1 className='title'>
        {title.toUpperCase()}
      </h1>
      <span className='subtitle'>
        SHOP NOW
      </span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

MenuItem.defaultProps = {
  title: '',
  imageUrl: '',
};

export default MenuItem;
