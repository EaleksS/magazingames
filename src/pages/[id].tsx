import React from 'react';
import { Header } from '../components/Header/Header';
import { useGamesQuery } from '../hooks/useGamesQuery';
import styles from '../components/Games/Games.module.scss';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

export const GamePage = () => {
  const { isLoading, data } = useGamesQuery();
  let games: any = [];
  if (!isLoading) {
    data.data.forEach((e: any) => {
      if (e.id === Number(window.location.pathname.slice(6))) {
        games.push(e);
      }
    });
  }
  const { id, title, cent, oldCent } = games[0];

  return (
    <>
      <Header />
      <div className={styles.container}>
        {isLoading ? (
          'loading'
        ) : (
          <div className={styles.games}>
            <div className={styles.game}>
              <img
                src={`${window.location.origin}/games/game${id}.png`}
                alt={title}
              />
              <div className={styles.info}>
                <div className={styles.cent}>
                  <h2>{cent} P</h2>
                  <h3>-15%</h3>
                  <h4>{oldCent} P</h4>
                </div>
                <div className={styles.title}>
                  <h1>{title}</h1>
                  <button>+</button>
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
          </div>
        )}
      </div>
    </>
  );
};
