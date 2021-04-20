import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../utils/breakpointsMedia';

const ProjectDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;

  ${breakpointsMedia({
    xs: css`
      width: 250px;
      margin-bottom: 25px;
    `,
    md: css`
      width: 500px;
    `,
  })}
`;

export default ProjectDescriptionWrapper;
