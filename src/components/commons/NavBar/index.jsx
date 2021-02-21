import React from 'react';
import Button from '../../foundation/Button';

export default function NavBar() {
  return (
    <>
      <Button type="button" ghost variant="primary.main">
        Sobre&nbsp;Mim
      </Button>
      <Button type="button" ghost variant="primary.main">
        Contato
      </Button>
    </>
  );
}
