import PropTypes from 'prop-types';
import React from 'react';
import Text from '../../foundation/Text';
import ProjectDescriptionWrapper from './styles';

export default function ProjectDescription({
  description, website,
}) {
  return (
    <ProjectDescriptionWrapper>
      <Text
        tag="p"
        variant="paragraph"
        color="secondary.main.contrastText"
      >
        {description}

      </Text>
      <Text
        tag="h2"
        variant="descriptionSubTitle"
        color="primary.main.contrastText"
      >
        Visite o site

      </Text>
      <Text
        tag="p"
        variant="paragraph"
        color="secondary.main.contrastText"
        href={website}
        target="_blank"
      >
        {website}

      </Text>
    </ProjectDescriptionWrapper>
  );
}

ProjectDescription.propTypes = {
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};
