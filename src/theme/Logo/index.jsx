import React from 'react';
import styled from 'styled-components';
import { Text } from '../../components/foundation/Text';

const LogoWrapper = styled.div`
  display: 'flex';
  justify-content: 'center';
  background-color: ${({ theme }) => theme.colors.primary.main.color};
`;

export default function Logo(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <LogoWrapper {...props}>
      <Text
        variant="logoText"
        tag="h1"
        color="tertiary.light"
        textAlign="center"
      >
        &lt;RAP/&gt;
      </Text>
    </LogoWrapper>
  );
}
