import React from 'react';
import styles from '../Games/Games.module.scss';
import { useGames, useSearch } from '../../store';
import { Nav } from './Nav';
import { Game } from '../Games/Game';

export const BlockSearch = () => {
  const value = useSearch((state) => state.value);
  const { games } = useGames((state) => ({
    games: state.games,
  }));

  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.games}>
        {!value.length
          ? 'Введите в поле'
          : games
              .filter((item) => {
                return item.title
                  .toLowerCase()
                  .split(' ')
                  .join('')
                  .includes(value.split(' ').join(''));
              })
              .map((game) => {
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
