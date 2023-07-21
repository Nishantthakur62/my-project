import styled, { keyframes } from 'styled-components';
import BackgroundImage from '../../images/background2.jpg'; // Replace './path/to/your/background-image.jpg' with the actual image path

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  background-image: url(${BackgroundImage});
`;

export const WelcomeWrapper = styled.div`
  animation: ${fadeIn} 1s ease; /* Apply the fadeIn animation to the WelcomeWrapper */
  height: auto;
  width: auto;
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center align the text content */
  color: #fff; /* Set the text color to white */
`;

export const WelcomeText = styled.h1`
  font-size: 48px; /* Increase the font size for WelcomeText */
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a text shadow for a nice effect */
`;

export const Subtitle = styled.h2`
  font-size: 28px; /* Increase the font size for Subtitle */
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const ActionButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #0056b3;
  }
`;
