import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.8rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Living Fire Australia</p>
    <p>Address: 148 Cochranes Road, Moorabbin, Victoria 3189</p>
    <p>Contact: (03) 99 777 887 | info@livingfire.com.au</p>
  </FooterContainer>
);

export default Footer;
