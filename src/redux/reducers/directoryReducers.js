import constants from '../constants';

import sections from '../../directory.sections';

const initialState = { sections };

export default (state = initialState, { type, payload }) => {
  switch (type) {

    default: { return state; }
  }
};
