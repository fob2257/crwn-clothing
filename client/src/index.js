import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './index.css';

import * as serviceWorker from './serviceWorker';

import ApolloProvider from './graphql/apollo';

import ReduxProvider from './redux';
import { setCurrentUser, checkUserSession } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import HeaderContainer from './components/HeaderContainer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInSignUpPage from './pages/SignInSignUpPage';
import CheckoutPageContainer from './pages/CheckoutPageContainer';

const App = ({ currentUser, setCurrentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Router>
        <HeaderContainer />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signIn' render={() =>
            currentUser ? (<Redirect to='/' />)
              : (<SignInSignUpPage />)
          } />
          <Route exact path='/checkout' component={CheckoutPageContainer} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});

const AppHOC = connect(mapStateToProps, mapDispatchToProps)(App);

const Root = () => (
  <div className='root'>
    <ApolloProvider>
      <ReduxProvider>
        <AppHOC />
      </ReduxProvider>
    </ApolloProvider>
  </div>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
