import React, { useState } from 'react';

import shopPageCollections from './ShopPage.collections';

import CollectionPreview from '../components/CollectionPreview';

const ShopPage = () => {
  const [collections, setCollection] = useState(shopPageCollections);

  return (
    <div className='shop-page'>
      {
        collections.map(item =>
          <CollectionPreview key={item.id} {...item} />
        )
      }
    </div>
  );
};

export default ShopPage;
