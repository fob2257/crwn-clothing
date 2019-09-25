import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './Header.styles';

import { fireAuth } from '../firebase/firebase.util';

import { selectCurrentUser } from '../redux/selectors/userSelectors';
import { selectCartHidden } from '../redux/selectors/cartSelectors';

import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {
        currentUser ? (
          <OptionDiv onClick={() => fireAuth.signOut()}>
            SIGN OUT
          </OptionDiv>
          // Or
          // <OptionLink as='div' onClick={() => fireAuth.signOut()}>
          //   SIGN OUT
          // </OptionLink>
        ) : (
            <OptionLink to='/signIn'>
              SIGN IN
            </OptionLink>
          )
      }
      <CartIcon />
    </OptionsContainer>
    {
      !hidden && <CartDropdown />
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
