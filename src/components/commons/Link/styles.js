/* eslint-disable react/jsx-props-no-spreading */
import get from 'lodash/get';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit;')};
  
  text-decoration: none;
  opacity: 1;
  
  transition: opacity ${({ theme }) => theme.transition};
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default StyledLink;
