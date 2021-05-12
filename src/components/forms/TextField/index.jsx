import PropTypes from 'prop-types';
import React from 'react';
import Text from '../../foundation/Text';
import Input, { InputWrapper } from './styles';

export default function TextField({
  type,
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;
  
  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      
      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="error.main"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  type: 'text',
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};
