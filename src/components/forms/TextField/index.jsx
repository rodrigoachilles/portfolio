import PropTypes from 'prop-types';
import React from 'react';
import Input, { InputWrapper } from './styles';

export default function TextField({
  type,
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
}

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
