import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './Header.styles';

import { selectCurrentUser } from '../redux/selectors/userSelectors';
import { signOutStart } from '../redux/actions/userActions';

import CartIconContainer from './CartIconContainer';
import CartDropdownContainer from './CartDropdownContainer';

const Header = ({ currentUser, hidden, signOutStart }) => (
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
          <OptionDiv onClick={signOutStart}>
            SIGN OUT
          </OptionDiv>
        ) : (
            <OptionLink to='/signIn'>
              SIGN IN
            </OptionLink>
          )
      }
      <CartIconContainer />
    </OptionsContainer>
    {
      !hidden && <CartDropdownContainer />
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
