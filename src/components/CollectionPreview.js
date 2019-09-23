import React from 'react';

import './CollectionPreview.styles.scss';

import CollectionItem from './CollectionItem';

const CollectionPreview = ({ title, items, routeName }) => (
  <div className='collection-preview'>
    <h1 className='title'>
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {
        items.slice(0, 4).map(item =>
          <CollectionItem key={item.id} item={item} />
        )
      }
    </div>
  </div>
);

export default CollectionPreview;
