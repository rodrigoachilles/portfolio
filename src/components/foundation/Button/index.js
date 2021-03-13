import get from 'lodash/get';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../utils/breakpointsMedia';
import { TextStyleVariants } from '../Text/styles';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const Button = styled.button` 
  cursor: pointer;
  font-weight: normal;
  opacity: 1;
  text-align: center;
  text-decoration: none;
  text-transform: lowercase;
  display: inline-block;
  margin: 4px 2px;
  border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  border-radius: 50%;

  ${TextStyleVariants.button}

  ${breakpointsMedia({
    xs: css`
      padding: 5px 10px;
    `,
    md: css`
      padding: 4px 12px;
    `,
  })}

  transition: opacity ${({ theme }) => theme.transition};
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
