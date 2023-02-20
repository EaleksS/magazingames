import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import logoImg from '../../images/logo.svg';
import { CiSearch } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import { useBasket, useSearch, useStore } from '../../store/store';
import { Nav } from '../Nav/Nav';

export const Header = () => {
  const { isAuth } = useStore();
  const [value, setValue] = useState('');
  const basket = useBasket((state) => state.games);
  const valueSearch = useSearch((state) => state.getValue);
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
    valueSearch(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();

    if (window.location.pathname !== '/search') {
      navigate('/search');
    }

    setValue('');
  };

  return (
    <>
      <Nav />
      {isAuth ? (
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logoImg} alt="logo" />
            <Link to="/">
              <h1>Магазин</h1>
            </Link>
          </div>

          <div className={styles.search}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                placeholder="Поиск"
                value={value}
                onChange={(e) => handleChange(e)}
              />
              <button type="submit" onClick={handleClick}>
                <span>
                  <CiSearch />
                </span>
              </button>
            </form>
          </div>
          <div className={styles.info}>
            <Link to="/basket">
              {basket.length === 0 ? '' : <small>{basket.length}</small>}
              <button className={styles.basket}>
                <SlBasket />
              </button>
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
