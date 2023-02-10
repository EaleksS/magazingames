import React from 'react';
import styles from './BasketComp.module.scss';
import { VscClose } from 'react-icons/vsc';
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useBasket, useGames } from '../../store';
import { Link } from 'react-router-dom';

export const BasketComp = () => {
  const basket = useBasket((state) => state.games);
  const deleteGame = useBasket((state) => state.deleteGame);
  const deleteBasketId = useGames((state) => state.deleteBasketId);

  const handleDeleteGame = (game: any) => {
    deleteGame(game);
    deleteBasketId(game.id);
  };

  let i: number = 0;

  basket.forEach((cent) => (i += cent.cent));

  return (
    <div className={styles.container}>
      <h1>
        Корзина <span>{basket.length}</span>
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
                      <h2>{game.cent}</h2>
                      <h3>-25%</h3>
                      <h4>{game.oldCent}</h4>
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
            <h2>{i}</h2>
            <button>Оформить заказ</button>
            <p>
              Покупая данный товар, я подтверждаю,что ознакомился и согласен с
              <a href=".#"> условиями </a> и <a href=".#"> условия магазина</a>
            </p>
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
