import React, { useState } from 'react';

import collectionsData from './collections';

import CollectionPreview from '../../components/CollectionPreview';

const ShopPage = () => {
  const [collections, setCollection] = useState(collectionsData);

  return (
    <div className='shop-page'>
      {
        collections.map((item, i) =>
          <CollectionPreview {...item} />
        )
      }
    </div>
  );
};

export default ShopPage;
