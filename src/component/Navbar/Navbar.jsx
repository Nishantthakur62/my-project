import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavContainer, SpaceShipIcon, NavMenu, NavItem } from './Navbars.style';

const Navbar = () => {
  const navigate = useNavigate(); 

  const navigateTo = (path) => {
    navigate(path); 
  };
  return (  
    <NavContainer>
      <SpaceShipIcon>&#128640;</SpaceShipIcon>
      <NavMenu>
        <NavItem onClick={() => navigateTo('/')}>Home</NavItem>
      <NavItem onClick={() => navigateTo('/about')}>About</NavItem>
        <NavItem onClick={() => navigateTo('/contact')}>Contact Ground Control</NavItem>
        <NavItem onClick={() => navigateTo('/Project')}>Project</NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;