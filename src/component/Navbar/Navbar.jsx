import React from 'react';
import { NavContainer, SpaceShipIcon, NavMenu, NavItem } from './Navbars.style';
const Navbar = () => {
  return (
    <NavContainer>
      <SpaceShipIcon>&#128640;</SpaceShipIcon>
      <NavMenu>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>Contact Ground Control</NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;