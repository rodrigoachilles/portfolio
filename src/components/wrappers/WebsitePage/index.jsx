/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';
import Cover from '../../commons/Cover';
import Footer from '../../commons/Footer';
import FormContact from '../../commons/FormContact';
import Header from '../../commons/Header';
import Modal from '../../commons/Modal';
import SEO from '../../commons/SEO';
import Box from '../../foundation/layout/Box';

export const WebsitePageContext = createContext({
  toggleModalContact: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  coverProps,
  headerProps,
  bodyProps,
}) {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalContact: () => {
          setModalState(!isModalOpen);
        },
      }}
    >
      <SEO
        {...seoProps}
      />

      {coverProps.display && (<Cover />)}

      {headerProps.display && (<Header onContactClick={() => setModalState(true)} />)}

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(props) => (
          <FormContact props={props} />
        )}

      </Modal>

      <Box
        as="main"
        display="flex"
        flex="1"
        flexDirection="column"
        {...bodyProps}
      >

        {children}

      </Box>

      <Footer />
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  coverProps: {
    display: false,
  },
  headerProps: {
    display: true,
  },
  bodyProps: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  coverProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  headerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  bodyProps: PropTypes.shape({
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
