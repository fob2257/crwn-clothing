import { takeEvery, takeLatest, call, put, all } from 'redux-saga/effects';

import constants from '../constants';
import { fetchCollectionsSuccess, fetchCollectionsFails } from '../actions/shopActions';

import { fireStore, mapCollectionsSnapshot } from '../../firebase/firebase.util';

export function* fetchCollectionsStart() {
  yield takeLatest(constants.FETCH_COLLECTIONS_START, function* fetchCollectionsAsync() {
    try {
      const collectionRef = fireStore.collection('collections');

      const snapShot = yield collectionRef.get();
      const res = yield call(mapCollectionsSnapshot, snapShot);

      yield put(fetchCollectionsSuccess(res));
    } catch (error) {
      yield put(fetchCollectionsFails(error.message));
    }
  });
};

export default function* () {
  yield all([
    fetchCollectionsStart,
  ].map(saga => call(saga)));
};
