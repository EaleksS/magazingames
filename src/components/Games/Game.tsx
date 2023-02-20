import React from 'react';
import styles from './Games.module.scss';
import { useBasket } from '../../store/store';
import { Modal } from '../Modal/Modal';
import { useNavigate } from 'react-router';

export const Game = (game: any) => {
  const { title, images, cent, discount } = game;
  const { addGame, deleteGame, games } = useBasket();

  const [modalActive, setModalActive] = React.useState(false);

  const navigate = useNavigate();

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
    <>
      <div className={styles.game}>
        <img src={images} alt={title} onClick={() => setModalActive(true)} />
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
              <button
                className={styles.inBasket}
                onClick={() => handleDelete()}
              >
                −
              </button>
            ) : (
              <button onClick={() => handleBasket()}>+</button>
            )}
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.modal}>
          <img src={game.images} alt={game.title} height={464} width={350} />
          <div className={styles.content}>
            <h1>Купить {game.title}</h1>
            <div className={styles.price}>
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
            <div className={styles.btn}>
              <button>Купить</button>
              {flag ? (
                <button
                  className={styles.active}
                  onClick={() => navigate('/basket')}
                >
                  Перейти в корзину
                </button>
              ) : (
                <button onClick={() => handleBasket()}>В корзину</button>
              )}
            </div>
            <p>{game.description}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};
