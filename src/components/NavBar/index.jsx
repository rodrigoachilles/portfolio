import React from 'react';
import Button from '../Button';

export default function NavBar() {
  return (
    <>
      <Button type="button" ghost variant="primary.main">
        Sobre Mim
      </Button>
      <Button type="button" ghost variant="primary.main">
        Contato
      </Button>
    </>
  );
}
