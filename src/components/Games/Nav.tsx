import React from 'react';
import styles from './Games.module.scss';

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <button className={styles.activate}>Игры</button>
    </div>
  );
};
