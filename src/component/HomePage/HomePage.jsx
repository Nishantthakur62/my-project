import React from 'react';
import { HeroSection, SectionTitle, SectionContent, AdditionalSection, AdditionalTitle, AdditionalContent } from './HomePage.style.js';

const Homepage = () => {
  return (
    <>
      <HeroSection>
        <SectionTitle>Welcome to Cosmic Voyage</SectionTitle>
        <SectionContent>
          <p>Embark on a thrilling journey through the cosmos and explore the wonders of space.</p>
          <p>Discover distant planets, mysterious nebulae, and the secrets of the universe.</p>
          <p>Buckle up, for the adventure of a lifetime awaits!</p>
        </SectionContent>
      </HeroSection>

      <AdditionalSection>
        <AdditionalTitle>Discover New Worlds</AdditionalTitle>
        <AdditionalContent>
          <p>Experience the wonders of distant galaxies and uncharted territories.</p>
          <p>Find breathtaking celestial landscapes and encounter unique life forms.</p>
          <p>Our expeditions are led by renowned experts in astronomy and space exploration.</p>
        </AdditionalContent>
      </AdditionalSection>
    </>
  );
};

export default Homepage;
