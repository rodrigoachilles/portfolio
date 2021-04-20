import PropTypes from 'prop-types';
import React from 'react';
import ProjectDescription from '../../commons/ProjectDescription';
import ProjectPhoto from '../../commons/ProjectPhoto';
import SectionTitle from '../../commons/SectionTitle';
import Box from '../../foundation/layout/Box';
import ProjectScreenWrapper from './styles';

export default function ProjectScreen({ project }) {
  return (
    <ProjectScreenWrapper>
      <SectionTitle title={project.header} />

      <Box
        display="flex"
        flexDirection="row"
        alignItems="stretch"
        justifyContent="center"
        flexWrap="wrap"
      >
        <ProjectPhoto image={project.image} />

        <ProjectDescription
          description={project.description}
          website={project.website}
        />

      </Box>
    </ProjectScreenWrapper>
  );
}

ProjectScreen.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    header: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
    description: PropTypes.string,
    website: PropTypes.string,
    highlighted: PropTypes.bool,
  }).isRequired,
};
