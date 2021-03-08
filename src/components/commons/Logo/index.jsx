import React from 'react';
import Text from '../../foundation/Text';
import LogoWrapper from './styles';

export default function Logo(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <LogoWrapper {...props}>
      <Text
        variant="logoText"
        tag="span"
        color="primary.main.contrastText"
        textAlign="center"
      >
        &lt;RAP/&gt;
      </Text>
    </LogoWrapper>
  );
}
