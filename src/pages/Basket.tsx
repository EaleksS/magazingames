import React from 'react';
import { BasketComp } from '../components/BasketComp/BasketComp';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { useBasket } from '../store';
import styles from './style.module.scss';

export const Basket = () => {
  const basket = useBasket((state) => state.games);
  console.log(basket);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
        <BasketComp />
      </div>
      <Footer />
    </div>
  );
};
