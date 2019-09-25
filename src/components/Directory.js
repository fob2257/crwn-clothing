import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DirectoryMenuContainer } from './Directory.styles';

import { selectDirectorySections } from '../redux/selectors/directorySelectors';

import MenuItem from './MenuItem';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      sections.map((item, i) =>
        <MenuItem key={i} {...item} />
      )
    }
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
