import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './MenuItem.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push('/shop')} // history.push(`${match.params}${linkUrl}`)
  >
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

export default withRouter(MenuItem);
