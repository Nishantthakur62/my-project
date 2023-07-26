import styled from 'styled-components';

export const HeroSection = styled.section`
  background-color: #16162e;
  color: #ffffff;
  padding: 100px 20px;
  text-align: center;
`;

export const SectionTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const SectionContent = styled.div`
  max-width: 600px;
  margin: 0 auto;

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;
const colors = ['#0e0e32', '#0e0e42', '#1a1a35', '#232348', '#2c2c5c', '#353570', '#3e3e85', '#47479a', '#5050af', '#5959c4'];
export const AdditionalSection = styled.section`
  background-color: ${(props) => colors[props.colorindex]};
  color: #ffffff;
  padding: 80px 20px;
  margin-top: 65px;
  text-align: center;
  transition:  1s ease-in-out; /* Added 1-second transition delay */
  border-radius: 20% 50% 20% 50%;
  &:hover {
    border-radius: 50% 20% 50% 20%; /* Remove border-radius on hover if desired */
    color: #ffcc00;
  }
`;


export const AdditionalTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const AdditionalContent = styled.div`
  max-width: 600px;
  margin: 0 auto;

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;
