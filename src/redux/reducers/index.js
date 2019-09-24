import { combineReducers } from 'redux';

import userReducers from './userReducers';
import cartReducers from './cartReducers';
import directoryReducers from './directoryReducers';
import shopReducers from './shopReducers';

export default combineReducers({
  user: userReducers,
  cart: cartReducers,
  directory: directoryReducers,
  shop: shopReducers,
});
