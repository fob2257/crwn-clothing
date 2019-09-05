import React from 'react';

import './styles.scss';

import CollectionItem from '../CollectionItem';

const CollectionPreview = ({ title, items, routeName }) => (
  <div className='collection-preview'>
    <h1 className='title'>
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {
        items.slice(0, 4).map((item, i) =>
          <CollectionItem key={i} {...item} />
        )
      }
    </div>
  </div>
);

export default CollectionPreview;