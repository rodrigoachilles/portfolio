import styled from 'styled-components';
import Text from '../../foundation/Text';

export const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  padding: 12px 16px;
  outline: 0;
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph',
};

export default Input;
