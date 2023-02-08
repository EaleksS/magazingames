import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from './style.module.scss';

export const Favorite = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
      </div>
      <Footer />
    </div>
  );
};
