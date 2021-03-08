import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Card from '../Card';
import SectionTitle from '../SectionTitle';
import myProjects from './content';
import ProjectWrapper from './styles';

export default function Projects() {
  return (
    <ProjectWrapper>
      <SectionTitle />
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          {myProjects.map((project) => (
            <Grid.Col value={{ xs: 12, md: 6, lg: project.highlighted ? 12 : 4 }} key={project.id}>
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
