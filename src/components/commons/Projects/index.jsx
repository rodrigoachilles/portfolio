import React from 'react';
import styled from 'styled-components';
import Grid from '../../foundation/layout/Grid';
import Card from '../Card';
import SectionTitle from '../SectionTitle';

const ProjectWrapper = styled.main`
  width: 100%;
  height: 300vh;
  display: flex;
  flex: 1;
  flex: wrap;
  flex-direction: column;
  margin: 18px;
`;

export default function Projects() {
  const myProjects = [
    {
      header: 'Project Report',
      image: {
        url: 'images/project1.svg',
        alt: 'Project1',
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      highlighted: true,
    },
    {
      header: 'Project Report',
      image: {
        url: 'images/project2.svg',
        alt: 'Project2',
      },
    },
    {
      header: 'Project Report',
      image: {
        url: 'images/project1.svg',
        alt: 'Project1',
      },
    },
    {
      header: 'Project Report',
      image: {
        url: 'images/project2.svg',
        alt: 'Project2',
      },
    },
  ];

  return (
    <ProjectWrapper>
      <SectionTitle />
      <Grid.Container>
        <Grid.Row justifyContent="space-between">
          {myProjects.map((project) => (
            <Grid.Col
              value={{ xs: 12, md: 5, lg: project.highlighted ? 12 : 4 }}
              order={project.highlighted}
            >
              <Card
                header={project.header}
                description={project.description}
                image={project.image}
                highlighted={project.highlighted}
              />
            </Grid.Col>
          ))}
        </Grid.Row>
      </Grid.Container>
    </ProjectWrapper>
  );
}
