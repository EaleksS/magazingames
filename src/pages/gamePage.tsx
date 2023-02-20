import React, { useState, FC } from 'react';
import { Header } from '../components/Header/Header';
import { useGamesQuery } from '../hooks/useGamesQuery';
import styles from '../components/Games/Games.module.scss';
import style from './style.module.scss';
import { BsCheckCircle } from 'react-icons/bs';
import { useBasket } from '../store/store';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';

export const GamePage: FC = () => {
  const [btnInfo, setBtnInfo]: any = useState(1);
  const { isLoading, res } = useGamesQuery();
  const { addBasket, basketGames } = useBasket((state) => ({
    addBasket: state.addGame,
    basketGames: state.games,
  }));

  let games: any = [];

  if (
    !isLoading &&
    Number(window.location.pathname.slice(6)) > res.data.length
  ) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center' }}>Такой страницы нету</div>
        <Footer></Footer>
      </>
    );
  }

  if (!isLoading) {
    res.data.forEach((e: any) => {
      if (e.id === Number(window.location.pathname.slice(6))) {
        games.push(e);
      }
    });
  }
  const game = games[0];
  const handleBasket = () => {
    addBasket(game);
  };
  let flag = false;
  if (!isLoading) {
    basketGames.forEach((games) => {
      if (games.id === game.id) {
        flag = true;
      }
    });
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        {isLoading ? (
          'loading'
        ) : (
          <div className={style.container}>
            <div className={style.mainContent}>
              <img src={game.images} alt={game.title} />
              <div className={style.content}>
                <h1>Купить {game.title}</h1>
                <small>
                  <BsCheckCircle /> <span>В наличии</span>
                </small>
                <div className={style.price}>
                  {game.discount > 0 ? (
                    <>
                      <h2>
                        {Math.round((game.cent * (100 - game.discount)) / 100)}P
                      </h2>
                      <h3>-{game.discount}%</h3>
                      <h4>{game.cent} Р</h4>
                    </>
                  ) : (
                    <h2>{game.cent} P</h2>
                  )}
                </div>
                <div className={style.btn}>
                  <button>Купить</button>
                  {flag ? (
                    <Link to="/basket">
                      <button>Перейти в корзину</button>
                    </Link>
                  ) : (
                    <button onClick={() => handleBasket()}>В корзину</button>
                  )}
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td>Жанр</td>
                      <td>Платформа</td>
                      <td>Регион активации</td>
                      <td>Тип товара</td>
                    </tr>
                    <tr>
                      {game.info.map((item: any) => {
                        return <td>{item}</td>;
                      })}
                    </tr>
                  </tbody>
                </table>
                <div className={style.service}>
                  <button>Моментальная доставка</button>
                  <p>
                    <b>
                      <BsCheckCircle />
                    </b>
                    Гарантия качества
                  </p>
                </div>
              </div>
            </div>
            <div className={style.info}>
              <div className={style.nav}>
                <button
                  className={btnInfo === 1 ? style.active : ''}
                  onClick={() => setBtnInfo(1)}
                >
                  Описание товара
                </button>
                <button
                  className={btnInfo === 2 ? style.active : ''}
                  onClick={() => setBtnInfo(2)}
                >
                  Системные требования
                </button>
                <button
                  className={btnInfo === 3 ? style.active : ''}
                  onClick={() => setBtnInfo(3)}
                >
                  Активация
                </button>
              </div>
              <div className={style.mainText}>
                {btnInfo === 1 ? (
                  <>
                    <h2>{game.description[0].title}</h2>
                    <p>{game.description[0].text}</p>
                  </>
                ) : btnInfo === 2 ? (
                  <>
                    <h2>Windows</h2>
                    <h2>Минимальные:</h2>
                    <p>
                      <span>ОС:</span> {game.description[1].oc}
                    </p>
                    <p>
                      <span>Процессор:</span>
                      {game.description[1].cpu}
                    </p>
                    <p>
                      <span>Оперативная память:</span>
                      {game.description[1].ram}
                    </p>
                    <p>
                      <span>Видеокарта:</span>
                      {game.description[1].videocard}
                    </p>
                    <p>
                      <span>DirectX:</span>
                      {game.description[1].directx}
                    </p>
                    <p>
                      <span>Место на диске:</span>
                      {game.description[1].discspace}
                    </p>
                  </>
                ) : btnInfo === 3 ? (
                  <>
                    <h2>{game.description[2].title}</h2>
                    <p>{game.description[2].text}</p>
                  </>
                ) : (
                  'Информации нету'
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
