import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-flow: center;
  flex-direction: row;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondary.main.color};
`;

FooterWrapper.Icon = styled.div`
  padding-top: 9px;
  padding-right: 12px;
  padding-bottom: 9px;
  padding-left: 12px;
  background-color: ${({ theme }) => theme.colors.primary.main.color};

  &:hover {
    opacity: .8;
  }
`;

export default FooterWrapper;
