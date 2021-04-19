import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import Description from '../../commons/Description';
import Repositories from '../../commons/Repositories';
import SectionTitle from '../../commons/SectionTitle';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';

export default function AboutScreen({ repositories }) {
  return (
    <Grid.Container>
      <Grid.Row
        marginLeft={0}
        marginRight={0}
        flex={1}
        flexDirection="column"
      >
        <Grid.Col
          display="flex"
          paddingRight="0"
          paddingLeft="0"
          flex={1}
          alignItems="stretch"
          flexDirection="column"
          offset={{ xs: 1, md: 2 }}
          value={{ xs: 10, md: 8 }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="100%"
            flex={1}
            padding={{
              // xs: '15px',
              // md: '45px',
            }}
            backgroundColor="white"
          >
            <SectionTitle title="Sobre mim" />

            <motion.img
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  transition: {
                    delay: 0.5,
                  },
                },
                hidden: {
                  opacity: 0,
                  scale: 2,
                  x: '100%',
                },
              }}
              alt="Foto de perfil do Rodrigo Achilles"
              style={{
                display: 'block',
                margin: 'auto',
                boxShadow: '3px 3px 5px 3px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
              }}
              src="/images/profile.jpg"
              width={{ xs: 163, md: 326 }}
              height={{ xs: 191, md: 382 }}
            />

            {/* <Image
              src="/images/profile.jpg"
              alt="Foto de perfil do Rodrigo Achilles"
              width="326"
              height="382"
            /> */}

            <Description />

            <Repositories repositories={repositories} />
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

AboutScreen.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    published: PropTypes.string,
  })).isRequired,
};
