import { all, call } from 'redux-saga/effects';

import shopSagas from './shopSagas';
import userSagas from './userSagas';

export default function* () {
  yield all([
    shopSagas,
    userSagas,
  ].map(saga => call(saga)));
};
