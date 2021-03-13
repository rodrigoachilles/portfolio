import React, { useState } from 'react';
import Button from '../../foundation/Button';
import Text from '../../foundation/Text';
import FormContact from '../FormContact';
import Modal from '../Modal';
import ContactWrapper from './styles';

export default function Contact() {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <ContactWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(props) => (
          <FormContact props={props} />
        )}

      </Modal>

      <Text
        variant="pageSubTitle"
        tag="h1"
        color="secondary.main.contrastText"
        textAlign="center"
      >
        Entre em contato

      </Text>

      <Button
        onClick={() => {
          setModalState(!isModalOpen);
        }}
      >
        +
      </Button>
    </ContactWrapper>
  );
}
