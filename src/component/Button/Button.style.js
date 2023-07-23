import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    background-color: white; 
    color: black; 
    border: 2px solid #4CAF50;
  }
`;
