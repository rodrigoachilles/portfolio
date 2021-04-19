import PropTypes from 'prop-types';
import React from 'react';
import Grid from '../../foundation/layout/Grid';
import Card from '../Card';
import Link from '../Link';
import SectionTitle from '../SectionTitle';
import ProjectWrapper from './styles';

export default function Projects({ projects }) {
  return (
    <ProjectWrapper>
      <SectionTitle title="meus projetos" />
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row
          marginLeft="-16px"
          marginRight="-16px"
        >
          {projects.map((project) => (
            <Grid.Col
              value={{ xs: 12, md: 6, lg: project.highlighted ? 12 : 4 }}
              key={project.id}
              paddingLeft="16px"
              paddingRight="16px"
            >
              <Link href={`/project/${project.id}`}>
                <Card
                  header={project.header}
                  description={project.description}
                  image={project.image}
                  highlighted={project.highlighted}
                />
              </Link>
            </Grid.Col>
          ))}
        </Grid.Row>
      </Grid.Container>
    </ProjectWrapper>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    header: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
    description: PropTypes.string,
    highlighted: PropTypes.bool,
  })).isRequired,
};
