import PropTypes from 'prop-types';
import React from 'react';
import Text from '../../foundation/Text';

export default function SectionTitle({ title }) {
  return (
    <Text
      variant="pageTitle"
      tag="h1"
      color="secondary.main.contrastText"
      textAlign="center"
      textTransform="uppercase"
    >
      {title}

    </Text>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
