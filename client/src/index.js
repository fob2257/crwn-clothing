import React, { useEffect, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as serviceWorker from './serviceWorker';

import ReduxProvider from './redux';
import { checkUserSession } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import { GlobalStyle } from './global.styles';

import Header from './components/Header';
import Spinner from './components/common/Spinner';
import ErrorBoundary from './components/common/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const SignInSignUpPage = lazy(() => import('./pages/SignInSignUpPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/signIn' render={() =>
                currentUser ? (<Redirect to='/' />)
                  : (<SignInSignUpPage />)
              } />
              <Route exact path='/checkout' component={CheckoutPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const AppHOC = connect(mapStateToProps, mapDispatchToProps)(App);

const Root = () => (
  <div className='root'>
    <ReduxProvider>
      <AppHOC />
    </ReduxProvider>
  </div>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
