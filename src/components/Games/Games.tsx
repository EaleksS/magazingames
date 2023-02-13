import React from 'react';
import styles from './Games.module.scss';
import MyLoader from '../MyLoader';
import { useGamesQuery } from '../../hooks/useGamesQuery';
import { Nav } from './Nav';
import { Game } from './Game';

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

export const Games = () => {
  const { isLoading, res } = useGamesQuery();

  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.games}>
        {isLoading
          ? myArray.map((id) => <MyLoader key={id} />)
          : res.data.map((game: any) => {
              return (
                <div key={game.id}>
                  <Game {...game} />
                </div>
              );
            })}
      </div>
    </div>
  );
};
