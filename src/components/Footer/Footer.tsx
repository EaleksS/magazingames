import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import webMoneyImg from '../../images/WebMoney_logo_blue 2 1.svg';
import qiwiImg from '../../images/Logo_qiwi_rgb 1.svg';
import masterCardImg from '../../images/mastercard 2.svg';
import visaImg from '../../images/Visa_Inc._logo 1.svg';
import mirImg from '../../images/1920px-Mir-logo.SVG 1.svg';
import bitcoinImg from '../../images/2560px-Bitcoin_logo 1.svg';
import subtract from '../../images/Subtract.svg';
import google from '../../images/google.png';
import vk from '../../images/Vk.svg';
import discord from '../../images/Discord.svg';
import Twitter from '../../images/Twitter.svg';
import instagram from '../../images/Instagram.svg';

export const Footer = () => {
  return (
    <>
      <div className={styles.line}>
        <div className={styles.container}>
          <div className={styles.payCards}>
            <img src={webMoneyImg} alt="1" />
            <img src={qiwiImg} alt="2" />
            <img src={masterCardImg} alt="3" />
            <img src={visaImg} alt="4" />
            <img src={mirImg} alt="5" />
            <img src={bitcoinImg} alt="7" />
          </div>
          <div className={styles.content}>
            <div className={styles.links}>
              <ul>
                <Link to="#" className={styles.link}>
                  О компании
                </Link>
                <Link to="#" className={styles.link}>
                  О нас
                </Link>
                <Link to="#" className={styles.link}>
                  Вакансии
                </Link>
                <Link to="#" className={styles.link}>
                  Реквизиты
                </Link>
              </ul>
              <ul>
                <Link to="#" className={styles.link}>
                  Договор оферты
                </Link>
                <Link to="#" className={styles.link}>
                  Каталог
                </Link>
                <Link to="#" className={styles.link}>
                  Акции
                </Link>
                <Link to="#" className={styles.link}>
                  Личный кабинет
                </Link>
              </ul>
              <ul>
                <Link to="#" className={styles.link}>
                  Договор оферты
                </Link>
                <Link to="#" className={styles.link}>
                  Каталог
                </Link>
                <Link to="#" className={styles.link}>
                  Акции
                </Link>
                <Link to="#" className={styles.link}>
                  Личный кабинет
                </Link>
              </ul>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src={subtract} alt="1" />
                <div>
                  <small>verified</small>
                  <small>WebMoney</small>
                </div>
              </div>
              <div className={styles.card}>
                <img src={google} alt="2" />
                <div>
                  <small>Safe Browsing</small>
                  <small>Google</small>
                </div>
              </div>
            </div>
          </div>
          <p>
            Все продаваемые ключи закупаются у официальных дистрибьюторови
            издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <Link to="" className={styles.pravo}>
          Правовая информация
        </Link>
        <h1>Интернет-магазин игр © 2023</h1>
        <div>
          <a href=".#">
            <img src={vk} alt="vk" />
          </a>
          <a href=".#">
            <img src={discord} alt="discord" />
          </a>
          <a href=".#">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href=".#">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </>
  );
};
