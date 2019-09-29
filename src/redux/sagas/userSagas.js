import { takeLatest, call, put, all } from 'redux-saga/effects';

import constants from '../constants';
import { signInSuccess, signInFails } from '../actions/userActions';

import {
  signInWithGoogle,
  signInWithEmail,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.util';

function* getSnapshotFromUser(user) {
  const docRef = yield call(createUserProfileDocument, user);
  const docSnapshot = yield docRef.get();

  yield put(signInSuccess({ id: docSnapshot.id, ...docSnapshot.data() }));
};

export function* googleSignInStart() {
  yield takeLatest(constants.GOOGLE_SIGNIN_START, function* () {
    try {
      const { user } = yield signInWithGoogle();

      yield getSnapshotFromUser(user);
    } catch (error) {
      yield put(signInFails(error.message));
    }
  });
};

export function* emailSignInStart() {
  yield takeLatest(constants.EMAIL_SIGNIN_START, function* ({ payload: { email, password } }) {
    try {
      const { user } = yield signInWithEmail(email, password);

      yield getSnapshotFromUser(user);
    } catch (error) {
      yield put(signInFails(error.message));
    }
  });
};

export function* checkUserSession() {
  yield takeLatest(constants.CHECK_USER_SESSION, function* () {
    try {
      const user = yield getCurrentUser();

      if (!user) return;

      yield getSnapshotFromUser(user);
    } catch (error) {
      yield put(signInFails(error.message));
    }
  });
};

export default function* () {
  yield all([
    googleSignInStart,
    emailSignInStart,
    checkUserSession,
  ].map(saga => call(saga)));
};
