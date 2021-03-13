import PropTypes from 'prop-types';
import React from 'react';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import FormContent from './FormContent';

export default function FormContact({ props }) {
  const { onClose } = props;

  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
    >
      <Grid.Col
        display="flex"
        paddingRight="0"
        paddingLeft="0"
        flex={1}
        offset={{ xs: 1, md: 2 }}
        value={{ xs: 10, md: 8 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(0, 0, 0, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '15px',
            md: '45px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          <FormContent onClose={onClose} />
        </Box>

      </Grid.Col>
    </Grid.Row>
  );
}

FormContact.defaultProps = {
  onClose: () => {},
};

FormContact.propTypes = {
  onClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object.isRequired,
};
