import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [logger];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

export default (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
);
