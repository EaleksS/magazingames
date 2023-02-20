import React, { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';
import styles from './Login.module.scss';

export const Login: FC = () => {
  const { login, isAuth, error } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const [valueEmail, setValueEmail] = useState('');
  const [valuePass, setValuePass] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    console.log(valueEmail, valuePass);
    login(valueEmail, valuePass);
    setValueEmail('');
    setValuePass('');
  };

  return (
    <div className={styles.container}>
      <h1>Форма входа</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={valueEmail}
          onChange={(e) => setValueEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={valuePass}
          onChange={(e) => setValuePass(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          войти
        </button>
      </form>
      <p>{error}</p>
      <p>
        у вас нет учетной записи?
        <Link to="/auth/register" className={styles.link}>
          {' '}
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
};
