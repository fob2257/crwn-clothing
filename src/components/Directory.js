import React, { useState } from 'react';

import './Directory.styles.scss';
import directorySections from './Directory.sections';

import MenuItem from './MenuItem';

const Directory = () => {
  const [sections, setSection] = useState(directorySections);

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
