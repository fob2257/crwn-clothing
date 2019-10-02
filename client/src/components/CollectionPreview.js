import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './CollectionPreview.styles';

import CollectionItem from './CollectionItem';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {
        items.slice(0, 4).map(item =>
          <CollectionItem key={item.id} item={item} />
        )
      }
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
