import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logoImg from '../../assets/images/logo.svg';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';

export const Header = () => {
  const [value, setValue] = useState('');
  const [hoverHeart, setHoverHeart] = useState(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
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
            <CiSearch />
          </button>
        </form>
      </div>
      <div className={styles.info}>
        <Link to="/favorite">
          <button
            className={styles.heart}
            onMouseEnter={() => setHoverHeart(false)}
            onMouseLeave={() => setHoverHeart(true)}
          >
            {hoverHeart ? (
              <AiOutlineHeart />
            ) : (
              <span>
                <AiFillHeart />
              </span>
            )}
          </button>
        </Link>
        <Link to="/basket">
          <button className={styles.basket}>
            <SlBasket />
          </button>
        </Link>
      </div>
    </div>
  );
};
