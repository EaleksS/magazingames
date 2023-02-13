import React from 'react';
import styles from '../Games/Games.module.scss';
import { useSearch } from '../../store';
import { Nav } from './Nav';
import { Game } from '../Games/Game';
import { useGamesQuery } from '../../hooks/useGamesQuery';

export const BlockSearch = () => {
  const value = useSearch((state) => state.value);
  const { isLoading, res } = useGamesQuery();

  return (
    <div className={styles.container}>
      <Nav />
      {!isLoading ? (
        <div className={styles.games}>
          {!value.length
            ? 'Введите в поле'
            : res.data
                .filter((item: any) => {
                  return item.title
                    .toLowerCase()
                    .split(' ')
                    .join('')
                    .includes(value.toLowerCase().split(' ').join(''));
                })
                .map((game: any) => {
                  return (
                    <div key={game.id}>
                      <Game {...game} />
                    </div>
                  );
                })}
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
};
