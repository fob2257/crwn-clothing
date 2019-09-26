import constants from '../constants';

const initialState = { collections: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.UPDATE_COLLECTIONS: {
      return {
        ...state,
        collections: payload,
      };
    }

    default: { return state; }
  }
};
