import React from 'react';
import { Container, Title, Description, Subtitle, ProjectList, ProjectItem } from './ProjectPage.style';

const ProjectPage = () => {
  const projects = [
    { name: 'Hooks', link: 'https://soft-belekoy-38bed7.netlify.app' },
    { name: 'Games', link: 'https://nishant-game3.netlify.app/' },
    { name: 'Portfolio', link: 'https://nishant-gongi.netlify.app/#' },
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Container>
      <Title>Welcome to Our Projects</Title>
      <Description>
        The following button should redirect you to the Netlify links for the respective topics.
      </Description>
      <Subtitle>Our Projects</Subtitle>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectItem key={index} onClick={() => handleProjectClick(project.link)}>
            {project.name}
          </ProjectItem>
        ))}
      </ProjectList>
    </Container>
  );
};

export default ProjectPage;
