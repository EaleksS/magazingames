import React, {FC} from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Register } from '../components/Register/Register';

export const RegisterPage: FC = () => {
  return (
    <>
      <Header />
      <Register />
      <Footer />
    </>
  );
};
