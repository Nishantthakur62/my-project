import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { HomePageContainer, WelcomeText, Subtitle, ActionButton, WelcomeWrapper } from './HomePage.style';

const HomePage = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleGetStartedClick = () => {
    navigate('/about'); // Navigate to the AboutPage
  };

  return (
    <HomePageContainer>
       <WelcomeWrapper>
      <WelcomeText>Welcome to Project1</WelcomeText>
      <Subtitle>Discover the Wonders of React</Subtitle>
      <ActionButton onClick={handleGetStartedClick}>Get Started</ActionButton>
        </WelcomeWrapper>
    </HomePageContainer>
  );
};

export default HomePage;
