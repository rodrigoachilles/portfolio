import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display:flex;
  flex:1;
  flex-wrap:wrap;
  flex-flow: center;
  flex-direction: row;
  justify-content:center;
  background: ${({ theme }) => theme.colors.secondary.main.color};
`;

const FooterIcon = styled.div`
  padding-top: 9px;
  padding-right: 12px;
  padding-bottom: 9px;
  padding-left: 12px;
  background-color: ${({ theme }) => theme.colors.primary.main.color};
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FooterIcon {...props}>
        <a href="https://github.com/rodrigoachilles/">
          <img
            alt="github"
            src="images/github.svg"
            width="16px"
            height="16px"
          />
        </a>
      </FooterIcon>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FooterIcon {...props}>
        <a href="https://twitter.com/rodrigoachilles">
          <img
            alt="twitter"
            src="images/twitter.svg"
            width="16px"
            height="16px"
          />
        </a>
      </FooterIcon>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FooterIcon {...props}>
        <a href="https://www.linkedin.com/in/rodrigo-achilles/">
          <img
            alt="linkedin"
            src="images/linkedin.svg"
            width="16px"
            height="16px"
          />
        </a>
      </FooterIcon>
    </FooterWrapper>
  );
}
