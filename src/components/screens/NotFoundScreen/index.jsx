import { Lottie } from '@crello/react-lottie';
import React from 'react';
import SectionTitle from '../../commons/SectionTitle';
import Box from '../../foundation/layout/Box';
import notFound from './animations/notfound.json';

export default function NotFoundScreen() {
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      alignItems="center"
      flexGrow="1"
      justifyContent="center"
      width="100%"
      height="100vh"
    >
      <SectionTitle title="Página não encontrada" />

      <Box
        display="flex"
        justifyContent="center"
      >
        {/* https://lottiefiles.com/5094-404-error */}
        <Lottie
          width="250px"
          height="250px"
          config={{
            animationData: notFound, loop: false, autoplay: true, speed: 1.5,
          }}
        />
      </Box>
    </Box>
  );
}
