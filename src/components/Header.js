import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Header.styles.scss';
import { ReactComponent as Logo } from '../assets/crown.svg';

import { fireAuth } from '../firebase/firebase.util';

import { selectCurrentUser } from '../redux/selectors/userSelectors';
import { selectCartHidden } from '../redux/selectors/cartSelectors';

import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? (
          <div className='option' onClick={() => fireAuth.signOut()}>
            SIGN OUT
          </div>
        ) : (
            <Link className='option' to='/signIn'>
              SIGN IN
            </Link>
          )
      }
      <CartIcon />
    </div>
    {
      !hidden && <CartDropdown />
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
