import { motion } from 'framer-motion';
import React from 'react';
import Text from '../../foundation/Text';
import CoverWrapper from './styles';

export default function Cover() {
  return (
    <CoverWrapper>
      <CoverWrapper.Title>
        <motion.div
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
          initial="hidden"
          animate="show"
        >
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
        </motion.div>
      </CoverWrapper.Title>
    </CoverWrapper>
  );
}
