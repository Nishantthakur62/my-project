import React from 'react';
import { FooterContainer, FooterContent} from './Footer.style.js';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} Project1 Website. All rights reserved.</p>
        <p>Made with 🚀 by Nishant Thakur</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
