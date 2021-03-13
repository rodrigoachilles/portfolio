import PropTypes from 'prop-types';
import React from 'react';
import TextBase from './styles';

export default function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
  children: null,
};

Text.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  variant: PropTypes.string,
};
