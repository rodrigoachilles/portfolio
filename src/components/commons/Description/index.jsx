/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '../../foundation/Button';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import DescriptionWrapper from './styles';

export default function Description() {
  return (
    <DescriptionWrapper>
      <Button>
        +
      </Button>

      <Grid.Row>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          paddingRight={{ md: '20px' }}
        >
          <Text
            tag="p"
            variant="paragraph"
            color="primary.main.contrastText"
          >
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Sed at imperdiet urna.
            Nunc lacinia justo sed augue rutrum cursus.
            Sed venenatis sem in felis efficitur imperdiet.
            Etiam dignissim neque vel facilisis facilisis.
            Morbi vel ligula eros.
            Nulla dictum porta ante, in luctus nulla dapibus quis.
            Mauris ipsum arcu, dignissim a felis non, eleifend congue ante.
          </Text>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          paddingLeft={{ md: '20px' }}
        >
          <Text
            tag="p"
            variant="paragraph"
            color="primary.main.contrastText"
          >
            Fusce vitae ante ut sapien posuere elementum non sit amet purus.
            Integer vulputate pharetra tincidunt.
            Maecenas quis rutrum urna.
            Sed egestas tortor risus, vitae pretium diam varius eu.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
            Morbi eu arcu augue.
          </Text>
        </Grid.Col>
      </Grid.Row>

    </DescriptionWrapper>
  );
}
