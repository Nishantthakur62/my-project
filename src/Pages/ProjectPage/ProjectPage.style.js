import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 100px 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2em;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectItem = styled.li`
  font-size: 1.2em;
  color: #333;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #007BFF;
    color: #fff;
  }
`;
