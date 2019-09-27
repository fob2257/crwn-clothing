import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shopSagas';

export default function* () {
  yield all([
    call(fetchCollectionsStart),
  ]);
};
