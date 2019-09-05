import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import * as serviceWorker from './serviceWorker';

import { fireAuth } from './firebase/firebase.util';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInSignUpPage from './pages/SignInSignUpPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFn = fireAuth.onAuthStateChanged(user => setCurrentUser(user));

    return () => {
      unsubscribeFn();
    };
  }, []);

  return (
    <div>
      <Router>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
