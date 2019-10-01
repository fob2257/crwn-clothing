import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
    <ContentContainer>
      <ContentTitle>
        {title.toUpperCase()}
      </ContentTitle>
      <ContentSubtitle>
        SHOP NOW
      </ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
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
