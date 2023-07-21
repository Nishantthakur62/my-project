import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #0e0e23;
  padding: 20px 0;
  color: #ffffff;
  text-align: center;
  min-height: 60px; /* Set a fixed height for the footer */
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const FooterContent = styled.div`
  p {
    margin: 5px;
    font-size: 14px;
    line-height: 1.5;
  }
`;
