import React from 'react';
import styled from 'styled-components';
import Logo from '../../theme/Logo';
import Grid from '../foundation/layout/Grid';
import NavBar from '../NavBar';

const HeaderWrapper = styled.nav`
  display:"flex";
  flex:"1";
  flex-wrap:"nowrap";
  flex-direction:"row";
  justify-content:"center";
  background: ${({ theme }) => theme.colors.secondary.main.color};
`;

export default function Header(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <HeaderWrapper {...props}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={2}
            value={{ xs: 1, md: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <Logo />

          </Grid.Col>
          <Grid.Col
            offset={3}
            value={{ xs: 4, md: 4 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"

          >
            <NavBar />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </HeaderWrapper>
  );
}
