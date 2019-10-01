import constants from '../constants';

export const setCurrentUser = user => ({ type: constants.SET_CURRENT_USER, payload: user });

export const googleSignInStart = () => ({ type: constants.GOOGLE_SIGNIN_START });

export const emailSignInStart = payload => ({ type: constants.EMAIL_SIGNIN_START, payload });

export const signInSuccess = user => ({ type: constants.SIGNIN_SUCCESS, payload: user });

export const signInFails = error => ({ type: constants.SIGNIN_FAILS, payload: error });

export const checkUserSession = () => ({ type: constants.CHECK_USER_SESSION });

export const signOutStart = () => ({ type: constants.SIGNOUT_START });

export const signOutSuccess = () => ({ type: constants.SIGNOUT_SUCCESS });

export const signOutFails = error => ({ type: constants.SIGNOUT_FAILS, payload: error });

export const signUpStart = payload => ({ type: constants.SIGNUP_START, payload });

export const signUpSuccess = payload => ({ type: constants.SIGNUP_SUCCESS, payload });

export const signUpFails = error => ({ type: constants.SIGNUP_FAILS, payload: error });
