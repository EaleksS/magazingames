import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { BlockSearch } from '../components/Search/BlockSearch';

export const Search = () => {
  return (
    <>
      <Header />
      <BlockSearch />
      <Footer />
    </>
  );
};
