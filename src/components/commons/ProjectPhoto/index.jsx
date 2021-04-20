import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import ProjectPhotoWrapper from './styles';

export default function ProjectPhoto({
  image,
}) {
  return (
    <ProjectPhotoWrapper>
      <Image
        src={image.url}
        alt={image.alt}
        width={250}
        height={450}
      />
    </ProjectPhotoWrapper>
  );
}

ProjectPhoto.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};
