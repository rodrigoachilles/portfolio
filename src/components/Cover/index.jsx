import React from 'react';
import Box from '../foundation/layout/Box';
import { Text } from '../foundation/Text';

export default function Cover() {
  return (
    <>
      <Box
        display="flex"
        flex="1"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        backgroundImage="url(images/background.jpg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
        backgroundSize="cover"
        opacity="0.5"
      >
        {/* <div style={{ alignSelf: 'flex-start' }}>
          <img
            alt="Imagem da home principal de "
            style={{
              display: 'block', margin: 'auto', width: '20%', height: '20%',
            }}
            src="images/planta.svg"
          />
        </div> */}
        <div style={{ alignSelf: 'center' }}>
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign="center"
            textTransform="uppercase"
            marginTop="30px"
          >
            rodrigo achilles

          </Text>
        </div>
        <div style={{ alignSelf: 'center' }}>
          <Text
            variant="subTitle"
            tag="h2"
            color="tertiary.main"
            textAlign="center"
            textTransform="capitalize"
            marginBottom="30px"
          >
            portfolio

          </Text>
        </div>
      </Box>
    </>
  );
}
