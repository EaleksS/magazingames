import React from 'react';
import styles from './Modal.module.scss';

export const Modal = ({ active, setActive, children }: any) => {
  return (
    <div
      className={`${styles.modal} ${active ? styles.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${styles.content} ${active ? styles.activeContent : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
