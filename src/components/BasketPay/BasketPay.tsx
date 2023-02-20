import React, { useState } from 'react';
import styles from './BasketPay.module.scss';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im';
import webMoneyImg from '../../images/WebMoney_logo_blue 2 1.svg';
import qiwiImg from '../../images/Logo_qiwi_rgb 1.svg';
import masterCardImg from '../../images/mastercard 2.svg';
import visaImg from '../../images/Visa_Inc._logo 1.svg';
import mirImg from '../../images/1920px-Mir-logo.SVG 1.svg';
import ethereumImg from '../../images/ETHEREUM-YOUTUBE-PROFILE-PIC 1.svg';
import bitcoinImg from '../../images/2560px-Bitcoin_logo 1.svg';
import samsungPayImg from '../../images/640px-Samsung_Pay_icon 1.svg';
import { useBasket, useStore } from '../../store/store';

export const BasketPay = () => {
  const { basket, price } = useBasket((state) => ({
    basket: state.games,
    price: state.price,
  }));
  const { user } = useStore();
  const [active, setActive] = useState('bank');

  return (
    <div className={styles.container} id="pay">
      <div className={styles.content}>
        <div className={styles.cards}>
          <div
            className={active === 'elec' ? styles.active : ''}
            onClick={() => setActive('elec')}
          >
            <h1>
              {active === 'elec' ? <ImRadioChecked /> : <ImRadioUnchecked />}
              <span>Эллектронные кошельки</span>
            </h1>
            <span>
              <img src={webMoneyImg} alt="card" />
              <img src={qiwiImg} alt="card" />
            </span>
          </div>
          <div
            className={active === 'bank' ? styles.active : ''}
            onClick={() => setActive('bank')}
          >
            <h1>
              {active === 'bank' ? <ImRadioChecked /> : <ImRadioUnchecked />}
              <span>Банковские карты</span>
            </h1>
            <span>
              <span>
                <img src={masterCardImg} alt="card" />
                <img src={visaImg} alt="card" />
                <img src={mirImg} alt="card" />
              </span>
            </span>
          </div>
          <div
            className={active === 'kripta' ? styles.active : ''}
            onClick={() => setActive('kripta')}
          >
            <h1>
              {active === 'kripta' ? <ImRadioChecked /> : <ImRadioUnchecked />}
              <span>Криптовалюта</span>
            </h1>
            <span>
              <span>
                <img src={ethereumImg} alt="card" />
                <img src={bitcoinImg} alt="card" />
              </span>
            </span>
          </div>
          <div
            className={active === 'samsung' ? styles.active : ''}
            onClick={() => setActive('samsung')}
          >
            <h1>
              {active === 'samsung' ? <ImRadioChecked /> : <ImRadioUnchecked />}
              <span>Samsung pay</span>
            </h1>
            <span>
              <span>
                <img src={samsungPayImg} alt="card" />
              </span>
            </span>
          </div>
        </div>
        <div className={styles.mail}>
          <form>
            <input
              type="text"
              defaultValue={user.email}
              placeholder="Укажите почту"
            />
          </form>
        </div>
      </div>
      <div className={styles.pay}>
        <div>
          <h3>{basket.length} товаров</h3>
          <h2>{price} Р</h2>
          <button>Оформить заказ</button>
          <p>
            Покупая данный товар, я подтверждаю,что ознакомился и согласен с
            <a href=".#"> условиями </a> и <a href=".#"> условия магазина</a>
          </p>
        </div>
      </div>
    </div>
  );
};
