import styled from 'styled-components';

const CoverWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-image: url('/images/background.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

CoverWrapper.Title = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default CoverWrapper;
