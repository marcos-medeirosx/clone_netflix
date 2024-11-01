import React from 'react';
import styled from 'styled-components';
import UserMenu from './UserMenu';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #141414;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  color: #fff;
  margin-right: 15px;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:first-child {
    color: red;
    font-weight: bold;
  }
`;

const Header = ({ onLogout }) => {
  return (
    <Nav>
      <NavItems>
        <NavItem>Netflix</NavItem>
        <NavItem>Início</NavItem>
        <NavItem>Séries</NavItem>
        <NavItem>Filmes</NavItem>
        <NavItem>Bombando</NavItem>
        <NavItem>Minha lista</NavItem>
        <NavItem>Navegar por idiomas</NavItem>
      </NavItems>
      <UserMenu onLogout={onLogout} />
    </Nav>
  );
};

export default Header;
