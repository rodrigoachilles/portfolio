import React from 'react';
import Box from '../../foundation/layout/Box';
import socialMedias from './content';
import FooterWrapper from './styles';

export default function Footer(props) {
  return (
    <Box
      height="38px"
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FooterWrapper {...props}>
        {socialMedias.map((socialMedia) => (
          <a href={socialMedia.url} target="_blank" rel="noreferrer" key={socialMedia.id}>
            { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
            <FooterWrapper.Icon {...props}>
              <img
                alt={socialMedia.name}
                src={socialMedia.icon}
                width="16px"
                height="16px"
              />
            </FooterWrapper.Icon>
          </a>
        ))}
      </FooterWrapper>
    </Box>
  );
}
