import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #111;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-left: 20px;
    color: #fff;

    @media (max-width: 768px) {
      margin-left: 10px;
      font-size: 0.9rem;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Living Fire</Logo>
    <Nav>
      <ul>
        <li>Home</li>
        <li>Fireplace Range</li>
        <li>Contact Us</li>
        <li>Brands</li>
      </ul>
    </Nav>
  </HeaderContainer>
);

export default Header;
