import { css } from 'styled-components';
import theme from '../theme/index';

export default function breakpointsMedia(cssByBreakpoint) {
  const { breakpoints } = theme;
  const breakpointNames = Object.keys(breakpoints);

  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
            ${cssByBreakpoint[breakpointName]}
        }
    `);
}
