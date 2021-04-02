import React, { useContext } from 'react';
import Button from '../../foundation/Button';
import Text from '../../foundation/Text';
import { WebsitePageContext } from '../../wrappers/WebsitePage';
import ContactWrapper from './styles';

export default function ContactArea() {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <ContactWrapper>
      <Text
        variant="pageSubTitle"
        tag="h1"
        color="secondary.main.contrastText"
        textAlign="center"
      >
        Entre em contato

      </Text>

      <Button onClick={() => websitePageContext.toggleModalContact()}>
        +
      </Button>
    </ContactWrapper>
  );
}
