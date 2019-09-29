import { all, call } from 'redux-saga/effects';

import shopSagas from './shopSagas';
import userSagas from './userSagas';
import cartSagas from './cartSagas';

export default function* () {
  yield all([
    shopSagas,
    userSagas,
    cartSagas,
  ].map(saga => call(saga)));
};
