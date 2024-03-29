import constants from '../constants';

const initialState = {
  errorMessage: null,
  currentUser: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: payload,
      };
    }

    case constants.SIGNIN_SUCCESS: {
      return {
        ...state,
        currentUser: payload,
        errorMessage: null,
      };
    }

    case constants.SIGNIN_FAILS: {
      return {
        ...state,
        errorMessage: payload,
      };
    }

    case constants.SIGNOUT_SUCCESS: {
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };
    }

    case constants.SIGNOUT_FAILS: {
      return {
        ...state,
        errorMessage: payload,
      };
    }

    case constants.SIGNUP_FAILS: {
      return {
        ...state,
        errorMessage: payload,
      };
    }

    default: { return state; }
  }
};
