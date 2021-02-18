import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

const ProjectWrapper = styled.main`
  /* position: 'absolute';
  width: '1440px';
  height: '67px';
  left: '0px';
  top: '1025px';
  background: ${({ theme }) => theme.colors.secondary.main.color}; */
`;

export default function Project() {
  return (
    <ProjectWrapper>
      <SectionTitle />
      <div style={{
        display: 'flex',
        flex: '1',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      {/* <Card>
        <Card.Title />
        <Card.Image />
        <Card.Text />
        <Card.Destaque />
      </Card> */}

    </ProjectWrapper>
  );
}
