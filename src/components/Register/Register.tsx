import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/store';
import styles from './Register.module.scss';

export const Register = () => {
  const { register } = useStore();

  const [valueName, setValueName] = useState('');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePass, setValuePass] = useState('');
  const [valuePassConf, setValuePassConf] = useState('');
  const [valuePhoto] = useState('photo');
  const [error, setError] = useState('');

  const handleClick = () => {
    if (valuePass === valuePassConf) {
      register(valueName, valueEmail, valuePhoto, valuePass, valuePassConf);
      setValueName('');
      setValueEmail('');
      setValuePass('');
      setValuePassConf('');
    } else {
      setError('Пароли не савподают');
      setValuePass('');
      setValuePassConf('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Форма регистрации</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Имя"
          value={valueName}
          onChange={(e) => setValueName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Почта"
          value={valueEmail}
          onChange={(e) => setValueEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={valuePass}
          onChange={(e) => setValuePass(e.target.value)}
        />
        <input
          type="password"
          value={valuePassConf}
          placeholder="Повторите пароль"
          onChange={(e) => setValuePassConf(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          зарегистрироваться
        </button>
      </form>
      <p>{error}</p>
      <p>
        у вас есть учетная запись?
        <Link to="/auth/login" className={styles.link}>
          {' '}
          Войти
        </Link>
      </p>
    </div>
  );
};
