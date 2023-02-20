import React, {FC} from 'react';
import { Footer } from '../components/Footer/Footer';
import { Games } from '../components/Games/Games';
import { Header } from '../components/Header/Header';
// import styles from './style.module.scss';

export const Home: FC = () => {
  return (
    <>
      <Header />
      <Games />
      <Footer />
    </>
  );
};
