import styled from 'styled-components';

const HeaderWrapper = styled.nav`
  display: flex;
  flex: 1;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;

  border-top: 2px solid ${({ theme }) => theme.colors.borders.main.color};
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
`;

HeaderWrapper.LeftSide = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
  justify-content: center;
`;

HeaderWrapper.RightSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin: 0;

  list-style: none;
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary.main.contrastText};
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.tertiary.main.contrastText};
    }
  }
`;

export default HeaderWrapper;
