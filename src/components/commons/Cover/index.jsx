import React from 'react';
import Lottie from 'react-lottie';
import styled, { css } from 'styled-components';
import computerAnimation from '../../../lotties/computer.json';
import personAnimation from '../../../lotties/person.json';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { Text } from '../../foundation/Text';

const WrapperCover = styled.div`
  width: 100%;
  height: 300vh;
  display: flex;
  flex: 1;
  flex: wrap;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('images/background.jpg');
  background-repeat: repeat;
`;

const lottieComputerOptions = {
  loop: true,
  autoplay: true,
  animationData: computerAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const lottiePersonOptions = {
  loop: true,
  autoplay: true,
  animationData: personAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ImagePersonCover = styled.div`
  align-self: flex-end;
  opacity: 0.5;
  ${breakpointsMedia({
    xs: css`
      width: 150px;
    `,
    md: css`
      width: 200px;
    `,
  })}
`;

const ImageComputerCover = styled.div`
  align-self: flex-start;
  opacity: 0.5;
  ${breakpointsMedia({
    xs: css`
      width: 150px;
    `,
    md: css`
      width: 200px;
    `,
  })}
`;

export default function Cover() {
  return (
    <WrapperCover>
      <ImageComputerCover>
        <Lottie options={lottieComputerOptions} />
      </ImageComputerCover>
      <div style={{ alignSelf: 'center' }}>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign="center"
          textTransform="uppercase"
        >
          rodrigo achilles

        </Text>
        <Text
          variant="subTitle"
          tag="h2"
          color="tertiary.main"
          textAlign="center"
          textTransform="capitalize"
        >
          portfolio

        </Text>
      </div>
      <ImagePersonCover>
        <Lottie options={lottiePersonOptions} />
      </ImagePersonCover>
    </WrapperCover>
  );
}
