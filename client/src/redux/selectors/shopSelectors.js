import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);

export const selectShopCollectionsForPreview = createSelector([selectShopCollections],
  collections => !collections ? [] : Object.keys(collections).map(key => collections[key]));

export const selectShopCollection = urlParam => createSelector([selectShopCollections],
  collections => !collections ? null : collections[urlParam]);

export const selectShopIsFetching = createSelector([selectShop], shop => shop.isFetching);

export const selectShopCollectionsLoaded = createSelector([selectShop], shop => !!shop.collections);
