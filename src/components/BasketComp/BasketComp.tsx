import React from 'react';
import styles from './BasketComp.module.scss';
import { VscClose } from 'react-icons/vsc';
import { AiOutlineHeart, AiOutlineArrowDown } from 'react-icons/ai';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useBasket } from '../../store';
import { Link } from 'react-router-dom';

export const BasketComp = () => {
  const { basket, deleteGame, price } = useBasket((state) => ({
    basket: state.games,
    deleteGame: state.deleteGame,
    price: state.price,
  }));
  const deleteBasketId = useBasket((state) => state.deleteBasketId);

  const handleDeleteGame = (game: any) => {
    deleteGame(game);
    deleteBasketId(game.id);
  };

  return (
    <div className={styles.container}>
      <h1>
        Корзина <span>{basket.length === 0 ? '' : basket.length}</span>
      </h1>
      <div className={styles.basket}>
        <div className={styles.games}>
          {basket.map((game) => {
            return (
              <div className={styles.game} key={game.id}>
                <div className={styles.title}>
                  <Link to={`/game/${game.id}`}>
                    <img src={game.images} alt={game.title} />
                  </Link>

                  <div>
                    <h1>{game.title}</h1>
                    <div className={styles.cent}>
                      {game.discount > 0 ? (
                        <>
                          <h2>
                            {Math.round(
                              (game.cent * (100 - game.discount)) / 100
                            )}
                            P
                          </h2>
                          <h3>-{game.discount}%</h3>
                          <h4>{game.cent} Р</h4>
                        </>
                      ) : (
                        <h2>{game.cent} P</h2>
                      )}
                    </div>
                    <div className={styles.region}>
                      <p>
                        Регион активации <span>Россия и страны СНГ</span>
                      </p>
                      <p>
                        Сервис активации <span>Steam</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <button
                    className={styles.close}
                    onClick={() => handleDeleteGame(game)}
                  >
                    <VscClose />
                  </button>
                  <button className={styles.favorite}>
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.info}>
          <div>
            <h3>{basket.length} товаров</h3>
            <h2>{price} Р</h2>

            <a href="#pay">
              <button>
                <AiOutlineArrowDown className={styles.ai} />
              </button>
            </a>
          </div>
          <p className={styles.ceil}>
            <span>%</span> Если у вас есть купон на скидку, Вы сможете ввести
            его на следующем этапе
          </p>
        </div>
      </div>
    </div>
  );
};
