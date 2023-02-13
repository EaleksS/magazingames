import React from 'react';
import { BasketComp } from '../components/BasketComp/BasketComp';
import { BasketPay } from '../components/BasketPay/BasketPay';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
// import styles from './style.module.scss';

export const Basket = () => {
  return (
    <>
      <Header />
      <BasketComp />
      <BasketPay />
      <Footer />
    </>
  );
};
