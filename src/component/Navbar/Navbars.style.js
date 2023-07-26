import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #0e0e23;
  padding: 20px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 0px;
  opacity: 0.7;
  transition: 0.5s;
  &:hover {
    opacity:1;
    border-radius: 50px;
  }
`;

export const SpaceShipIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    color: #ffcc00;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.ul`
  font-size: 18px;
  margin: 0 15px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;
