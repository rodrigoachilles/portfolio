import React from 'react';
import Cover from '../components/commons/Cover';
import Footer from '../components/commons/Footer';
import Header from '../components/commons/Header';
import Projects from '../components/commons/Projects';

export default function Home() {
  return (
    <>
      <Cover />
      <Header />
      <Projects />
      <Footer />
    </>
  );
}
