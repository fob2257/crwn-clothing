import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  // thunk,
  sagaMiddleware
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const persistedRootReducer = persistReducer({
  key: 'root',
  storage: localStorage,
  whitelist: ['cart'],
}, rootReducer);

const store = createStore(persistedRootReducer, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export default (props) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      {props.children}
    </PersistGate>
  </Provider>
);
