import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoSvg } from '../assets/spro.svg';

// #region -- Styled components
const Container = styled.nav`
  width: 100%;
  height: 4.5rem;
`;
Container.displayName = 'Container';

const LogoButton = styled.button`
  width: 4rem;
  height: 4rem;
  margin: 0.25rem 0 0;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
`;
LogoButton.displayName = 'LogoButton';

const Logo = styled(LogoSvg)`
  width: 4rem;  
  height: 4rem;
`;
Logo.displayName = 'Logo';

const NavLinkContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  padding: 1.25rem;
`;
NavLinkContainer.displayName = 'NavLinkContainer';

const NavLink = styled.a`
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: #000000;
  &:hover {
    font-weight: bolder;
  }
`;
  NavLink.displayName = 'NavLink';
  
  const NavLinkCart = styled(NavLink)`
  margin: 0 0.25rem;
  border-radius: 0.5rem;
  background-color: #475952;
  color: #ffffff;
  &:hover {
    font-weight: normal;
    background-color: #2b3732;
  }
`;
NavLinkCart.displayName = 'NavLinkCart';
// #endregion

function Header() {
  return (
    <Container>
      <LogoButton role="link" onClick={() => { window.location.href = '/'; }}>
        <Logo />
      </LogoButton>
      <NavLinkContainer>
        <NavLink href="/menu">Menu</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/shop">Shop</NavLink>
        <NavLinkCart href="/cart">Cart</NavLinkCart>
      </NavLinkContainer>
    </Container>
  );
};

export default Header;
