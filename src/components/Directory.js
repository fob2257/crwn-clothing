import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Directory.styles.scss';

import { selectDirectorySections } from '../redux/selectors/directorySelectors';

import MenuItem from './MenuItem';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map((item, i) =>
        <MenuItem key={i} {...item} />
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
