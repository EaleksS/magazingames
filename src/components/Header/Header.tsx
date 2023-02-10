import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logoImg from '../../assets/images/logo.svg';
import { CiSearch } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import { useBasket, useSearch } from '../../store';

export const Header = () => {
  const [value, setValue] = useState('');
  const basket = useBasket((state) => state.games);
  const valueSearch = useSearch((state) => state.getValue);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
    valueSearch(e.target.value);
  };

  const handleClick = () => {
    setValue('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoImg} alt="logo" />
        <Link to="/">
          <h1>Playnchill</h1>
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
            <Link to="/search">
              <span>
                <CiSearch />
              </span>
            </Link>
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
  );
};
