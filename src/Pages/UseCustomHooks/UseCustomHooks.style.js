// UseCustomHooks.style.js
import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
  max-width: 600px;
  margin: 200px auto;
  padding: 20px;
  text-align: center;

  ${props =>
    props.theme === 'dark' &&
    css`
      background-color: #1a1a1a;
      color: #fff;
    `}
`;

export const Section = styled.div`
  border: 1px solid blue;
  margin-bottom: 20px;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${props =>
    props.theme === 'dark' &&
    css`
      background-color: #1a1a1a;
      color: #fff;
    `}
`;

export const Heading = styled.h2`
  margin-bottom: 10px;
  ${props =>
    props.theme === 'dark' &&
    css`
      color: #fff;
    `}
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${props => (props.theme === 'dark' ? '#333' : '#007bff')};

  &:hover {
    background-color: ${props => (props.theme === 'dark' ? '#1a1a1a' : '#0056b3')};
  }
`;

// Additional styles for the PageContainer
export const CustomHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

export const Hr = styled.hr`
  border: 1px solid ${props => (props.theme === 'dark' ? '#666' : '#ccc')};
  margin: 20px 0;
`;

// Additional styles for useLocalStorage Example
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Additional styles for useWindowSize Example
export const WindowSizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const WindowSizeText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

export const WindowSizeValue = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

// Additional styles for useToggle Example
export const ToggleContainer = styled.div`
  margin-top: 30px;
`;

export const ToggleText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

export const ToggleButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

// Additional styles for useKeyPress Example
export const KeyPressContainer = styled.div`
  margin-top: 30px;
`;

export const KeyPressText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

export const KeyPressInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Additional styles for useCopyToClipboard Example
export const CopyContainer = styled.div`
  margin-top: 30px;
`;

export const CopyText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

export const CopyButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
