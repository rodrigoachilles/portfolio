import styled, { css } from 'styled-components';
import Text from '../../foundation/Text';

export const TextAreaWrapper = styled.div`
  margin-bottom: 17px;
`;

const TextAreaInput = styled(Text)`
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  padding: 12px 16px;
  outline: 0;
  resize: none;
  ${({ rows }) => css`
    height: ${rows}%;
  `};
  ${({ columns }) => css`
    width: ${columns}%;
  `};
`;

TextAreaInput.defaultProps = {
  tag: 'textarea',
  variant: 'paragraph',
};

export default TextAreaInput;
