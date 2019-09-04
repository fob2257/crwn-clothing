import React, { useState } from 'react';

import sectionsData from './sections';
import './styles.scss';

import MenuItem from '../MenuItem';

const Directory = () => {
  const [sections, setSection] = useState(sectionsData);

  return (
    <div className='directory-menu'>
      {
        sections.map((item, i) =>
          <MenuItem key={i} {...item} />
        )
      }
    </div>
  );
};

export default Directory;
