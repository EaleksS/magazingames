import React from 'react';
import { Games } from '../components/Games/Games';
import { Header } from '../components/Header/Header';
// import styles from './style.module.scss';

export const Home = () => {
  return (
    <>
      <Header />
      <Games />
    </>
  );
};
