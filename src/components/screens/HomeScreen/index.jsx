import PropTypes from 'prop-types';
import React from 'react';
import ContactArea from '../../commons/ContactArea';
import Projects from '../../commons/Projects';

export default function HomeScreen({ projects }) {
  return (
    <>
      <Projects projects={projects} />
      <ContactArea />
    </>
  );
}

HomeScreen.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    header: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
    description: PropTypes.string,
    website: PropTypes.string,
    highlighted: PropTypes.bool,
  })).isRequired,
};
