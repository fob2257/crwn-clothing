import constants from '../constants';

const initialState = {
  isFetching: false,
  errorMessage: undefined,
  collections: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.FETCH_COLLECTIONS_START: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case constants.FETCH_COLLECTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        collections: payload,
      };
    }

    case constants.FETCH_COLLECTIONS_FAILS: {
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    }

    default: { return state; }
  }
};
