import React from 'react';
import { useSearch } from '../../store/store';
import styles from '../Games/Games.module.scss';

export const Nav = () => {
  const value = useSearch((state) => state.value);

  return (
    <div className={styles.nav}>
      <button className={styles.activate}>Поиск</button>
      <button>{value}</button>
    </div>
  );
};
