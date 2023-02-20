import React, {FC} from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';

export const LoginPage: FC = () => {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
};
