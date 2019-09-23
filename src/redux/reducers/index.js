import { combineReducers } from 'redux';

import userReducers from './userReducers';
import cartReducers from './cartReducers';

export default combineReducers({
  user: userReducers,
  cart: cartReducers,
});
