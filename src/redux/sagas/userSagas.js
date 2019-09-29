import { takeLatest, call, put, all } from 'redux-saga/effects';

import constants from '../constants';
import {
  signInSuccess,
  signInFails,
  signOutSuccess,
  signOutFails,
  signUpSuccess as signUpSuccessAction,
  signUpFails,
} from '../actions/userActions';

import {
  signInWithGoogle,
  signInWithEmail,
  createUserProfileDocument,
  getCurrentUser,
  signOut,
  fireAuth,
} from '../../firebase/firebase.util';

function* getSnapshotFromUser(user, additionalData = {}) {
  const docRef = yield call(createUserProfileDocument, user, additionalData);
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

export function* signOutStart() {
  yield takeLatest(constants.SIGNOUT_START, function* () {
    try {
      yield signOut();

      yield put(signOutSuccess());
    } catch (error) {
      yield put(signOutFails(error.message));
    }
  });
};

export function* signUpStart() {
  yield takeLatest(constants.SIGNUP_START, function* ({ payload: { email, password, displayName } }) {
    try {
      const { user } = yield fireAuth.createUserWithEmailAndPassword(email, password);

      yield put(signUpSuccessAction({ user, displayName }));
    } catch (error) {
      yield put(signUpFails(error.message));
    }
  });
};

export function* signUpSuccess() {
  yield takeLatest(constants.SIGNUP_SUCCESS, function* ({ payload: { user, displayName } }) {
    yield getSnapshotFromUser(user, { displayName });
  });
};

export default function* () {
  yield all([
    googleSignInStart,
    emailSignInStart,
    checkUserSession,
    signOutStart,
    signUpStart,
    signUpSuccess,
  ].map(saga => call(saga)));
};
