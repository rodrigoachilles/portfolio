import React from 'react';
import Text from '../../foundation/Text';
import CoverWrapper from './styles';

export default function Cover() {
  return (
    <CoverWrapper>
      <CoverWrapper.Title>
        <Text
          variant="title"
          tag="h1"
          color="primary.main.contrastText"
          textAlign="center"
          textTransform="uppercase"
        >
          rodrigo achilles

        </Text>
        <Text
          variant="subTitle"
          tag="h2"
          color="secondary.main.contrastText"
          textAlign="center"
          textTransform="capitalize"
        >
          portfolio

        </Text>
      </CoverWrapper.Title>
    </CoverWrapper>
  );
}
