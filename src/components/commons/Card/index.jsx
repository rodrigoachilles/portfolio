import PropTypes from 'prop-types';
import React from 'react';
import Text from '../../foundation/Text';
import CardWrapper from './styles';

export default function Card({
  header, description, image, highlighted,
}) {
  return (
    <CardWrapper highlighted={highlighted}>
      <CardWrapper.Header highlighted={highlighted}>
        <img
          src={image.url}
          alt={image.alt}
        />
      </CardWrapper.Header>

      <CardWrapper.Text highlighted={highlighted}>
        <Text
          tag="h1"
          variant="cardTitle"
          color="secondary.main.contrastText"
        >
          {header}

        </Text>
        <Text
          tag="p"
          variant="paragraph"
          color="secondary.main.contrastText"
        >
          {description}

        </Text>
      </CardWrapper.Text>
    </CardWrapper>
  );
}

Card.defaultProps = {
  description: '',
  highlighted: false,
};

Card.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  highlighted: PropTypes.bool,
};
