import PropTypes from 'prop-types';
import React from 'react';
import TextAreaInput, { TextAreaWrapper } from './styles';

export default function TextArea({
  placeholder,
  name,
  onChange,
  value,
  rows,
  columns,
}) {
  return (
    <TextAreaWrapper>
      <TextAreaInput
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        rows={rows}
        columns={columns}
      />
    </TextAreaWrapper>
  );
}

TextArea.defaultProps = {
  columns: '100',
};

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
  columns: PropTypes.string,
};
