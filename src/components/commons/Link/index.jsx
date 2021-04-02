/* eslint-disable react/jsx-props-no-spreading */
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import StyledLink from './styles';

export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
