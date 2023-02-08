import React from 'react';
import { useBasket, useGames } from '../../store';
import styles from './Games.module.scss';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

export const Games = () => {
  const games = useGames((state) => state.games);
  const addBasket = useBasket((state) => state.addGame);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <button className={styles.activate}>Новинки</button>
        <button>Аккаунты</button>
        <button>Ключи</button>
        <button>Активация</button>
        <button>Прокачка</button>
      </div>

      <div className={styles.games}>
        {games.map((game) => {
          const { title, id, images, cent, oldCent } = game;
          return (
            <div className={styles.game} key={id}>
              <img src={images} alt={title} />
              <div className={styles.info}>
                <div className={styles.cent}>
                  <h2>{cent} P</h2>
                  <h3>-15%</h3>
                  <h4>{oldCent} P</h4>
                </div>
                <div className={styles.title}>
                  <h1>{title}</h1>
                  <button onClick={() => addBasket(game)}>В корзину</button>
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
        })}
      </div>
    </div>
  );
};
