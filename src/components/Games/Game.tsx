import React from 'react';
import styles from './Games.module.scss';
import { useBasket } from '../../store';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Game = (game: any) => {
  const { title, images, cent, discount } = game;
  const { addBasket, deleteGame } = useBasket((state) => ({
    addBasket: state.addGame,
    deleteGame: state.deleteGame,
  }));
  const { getBasketId, inBasket, deleteBasketId } = useBasket((state) => ({
    getBasketId: state.getBasketId,
    inBasket: state.inBasket,
    deleteBasketId: state.deleteBasketId,
  }));

  const handleBasket = () => {
    addBasket(game);
    getBasketId(game.id);
  };
  const handleDelete = () => {
    deleteGame(game);
    deleteBasketId(game.id);
  };

  let flag = false;
  inBasket.forEach((id) => {
    if (id === game.id) {
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

        <div className={styles.gameInfo}>
          <span>
            <RiCheckboxBlankCircleFill />
            <p>Ключ</p>
          </span>
          <span>
            <RiCheckboxBlankCircleFill />
            <p>Аккаунт Steam</p>
          </span>
        </div>
      </div>
    </div>
  );
};
