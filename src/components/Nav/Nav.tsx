import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import userLogo from '../../images/unsplash_C3T8KTZxTFM.png';
import { useStore } from '../../store/store';

export const Nav = () => {
  const { user, logout } = useStore();
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.link} to="/">
          Отзывы
        </Link>
        <Link className={styles.link} to="/">
          Гарантии
        </Link>
        <Link className={styles.link} to="/">
          Как купить
        </Link>
        <Link className={styles.link} to="/">
          Накопительная
        </Link>
      </div>
      {user.name ? (
        <div className={styles.right}>
          <div
            className={styles.link3}
            onClick={() =>
              activeModal ? setActiveModal(false) : setActiveModal(true)
            }
          >
            <h2>{user.name}</h2>
            <img src={userLogo} alt="user" />
          </div>
          <div
            className={`${styles.modal} ${activeModal ? styles.active : ''}`}
          >
            <ul>
              <li>
                <button className={styles.btn} onClick={() => logout()}>
                  Выйти
                </button>
              </li>
              <li>
                <Link className={styles.btn} to="/basket">
                  Корзина
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link className={styles.link} to="/auth/login">
          Войти
        </Link>
      )}
    </div>
  );
};
