import constants from '../constants';

import { fireStore, mapCollectionsSnapshot } from '../../firebase/firebase.util';

export const fetchCollectionsStart = () => ({ type: constants.FETCH_COLLECTIONS_START });

export const fetchCollectionsSuccess = payload => ({ type: constants.FETCH_COLLECTIONS_SUCCESS, payload });

export const fetchCollectionsFails = payload => ({ type: constants.FETCH_COLLECTIONS_FAILS, payload });

// Redux Thunks
export const fetchCollectionsStartAsync = () => async dispatch => {
  try {
    dispatch(fetchCollectionsStart());

    const collectionRef = fireStore.collection('collections');

    const snapShot = await collectionRef.get();
    const res = mapCollectionsSnapshot(snapShot);

    dispatch(fetchCollectionsSuccess(res));
  } catch (error) {
    dispatch(fetchCollectionsFails(error.message));
  }
};
