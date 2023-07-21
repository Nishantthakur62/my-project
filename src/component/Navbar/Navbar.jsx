import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { NavContainer, SpaceShipIcon, NavMenu, NavItem } from './Navbars.style';

const Navbar = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const navigateTo = (path) => {
    navigate(path); // Use the navigate function to navigate to the specified path
  };

  return (  
    <NavContainer>
      <SpaceShipIcon>&#128640;</SpaceShipIcon>
      <NavMenu>
        <NavItem onClick={() => navigateTo('/')}>Home</NavItem>
        <NavItem onClick={() => navigateTo('/about')}>About</NavItem>
        <NavItem onClick={() => navigateTo('/service')}>Services</NavItem>
        <NavItem onClick={() => navigateTo('/contact')}>Contact Ground Control</NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;