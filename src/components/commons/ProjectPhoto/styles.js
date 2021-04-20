import styled from 'styled-components';

const ProjectPhotoWrapper = styled.div`
  border: .125rem solid ${({ theme }) => theme.colors.borders.main.color};
  background: ${({ theme }) => theme.colors.background.main.color};
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.2);
  transition: .2s box-shadow ease-in-out;
  border-radius: 8px;
  margin: 15px;
  
  &:hover {
    box-shadow: 0 14px 25px rgba(0,0,0,.16);
    opacity: .8;
  }
`;

export default ProjectPhotoWrapper;
