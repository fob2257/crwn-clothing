import { takeLatest, call, put, all } from 'redux-saga/effects';

import constants from '../constants';
import { clearCart } from '../actions/cartActions';

export function* signOutSuccess() {
  yield takeLatest(constants.SIGNOUT_SUCCESS, function* () {
    yield put(clearCart());
  });
};

export default function* () {
  yield all([
    signOutSuccess,
  ].map(saga => call(saga)));
};
