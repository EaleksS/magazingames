import React from 'react';
import styles from './Games.module.scss';
import { useBasket } from '../../store/store';
import { Link } from 'react-router-dom';

export const Game = (game: any) => {
  const { title, images, cent, discount } = game;
  const { addGame, deleteGame, games } = useBasket();

  const handleBasket = () => {
    addGame(game);
  };
  const handleDelete = () => {
    deleteGame(game);
  };

  let flag = false;
  games.forEach((games) => {
    if (games.id === game.id) {
      flag = true;
    }
  });

  return (
    <div className={styles.game}>
      <Link to={`/game/${game.id}`}>
        <img src={images} alt={title} />
      </Link>
      <div className={styles.info}>
        <div className={styles.cent}>
          {discount !== 0 ? (
            <>
              <h2>{Math.round((cent * (100 - discount)) / 100)} P</h2>
              <h3>-{discount}%</h3>
              <h4>{cent} Р</h4>
            </>
          ) : (
            <h2>{cent} P</h2>
          )}
        </div>
        <div className={styles.title}>
          <h1>{title}</h1>
          {flag ? (
            <button className={styles.inBasket} onClick={() => handleDelete()}>
              −
            </button>
          ) : (
            <button onClick={() => handleBasket()}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};
