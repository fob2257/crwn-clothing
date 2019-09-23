import constants from '../constants';

const initialState = { currentUser: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: payload,
      };
    }

    default: { return state; }
  }
};
