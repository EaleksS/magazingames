import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { useGamesQuery } from '../hooks/useGamesQuery';
import styles from '../components/Games/Games.module.scss';
import style from './style.module.scss';
import { BsCheckCircle } from 'react-icons/bs';
import { useBasket } from '../store';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';

export const GamePage = () => {
  const [btnInfo, setBtnInfo]: any = useState(1);
  const { isLoading, data } = useGamesQuery();
  const { addBasket, getBasketId, inBasket } = useBasket((state) => ({
    addBasket: state.addGame,
    getBasketId: state.getBasketId,
    inBasket: state.inBasket,
    deleteBasketId: state.deleteBasketId,
  }));

  let games: any = [];

  if (
    !isLoading &&
    Number(window.location.pathname.slice(6)) > data.data.length
  ) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center' }}>Такой страницы нету</div>
        <Footer />
      </>
    );
  }

  if (!isLoading) {
    data.data.forEach((e: any) => {
      if (e.id === Number(window.location.pathname.slice(6))) {
        games.push(e);
      }
    });
  }
  const game = games[0];

  const handleBasket = () => {
    addBasket(game);
    getBasketId(game.id);
  };

  let flag = false;
  if (!isLoading) {
    inBasket.forEach((id) => {
      if (id === game.id) {
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
                      <td>{game.info.genre}</td>
                      <td>{game.info.platform}</td>
                      <td>{game.info.region}</td>
                      <td>{game.info.type}</td>
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
                    <h2>{game.description.description.title}</h2>
                    <p>{game.description.description.text}</p>
                  </>
                ) : btnInfo === 2 ? (
                  <>
                    <h2>Windows</h2>
                    <h2>Минимальные:</h2>
                    <p>
                      <span>ОС:</span> {game.description.requirements.oc}
                    </p>
                    <p>
                      <span>Процессор:</span>
                      {game.description.requirements.cpu}
                    </p>
                    <p>
                      <span>Оперативная память:</span>
                      {game.description.requirements.ram}
                    </p>
                    <p>
                      <span>Видеокарта:</span>
                      {game.description.requirements.videocard}
                    </p>
                    <p>
                      <span>DirectX:</span>{' '}
                      {game.description.requirements.directx}
                    </p>
                    <p>
                      <span>Место на диске:</span>
                      {game.description.requirements.discspace}
                    </p>
                  </>
                ) : btnInfo === 3 ? (
                  <>
                    <h2>{game.description.activation.title}</h2>
                    <p>{game.description.activation.text}</p>
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

// const asd: any = [
//   {
//     id: 1,
//     title: 'Flowen',
//     images: '/games/game1.png',
//     cent: 1423,
//     discount: 0,
//     info: {
//       genre: 'Гонки',
//       platform: 'Steam',
//       region: 'Россия',
//       type: 'Ключ',
//     },
//     description: {
//       description: {
//         title: 'Полное погружение в Тамриэль',
//         text: 'Признайтесь, вы ведь тоже сразу после анонса нового поколения VR-шлемов захотели увидеть на них TES V? Тодд Говард вот точно захотел и, как это обычно бывает, воплотил желание в жизнь. Очередной Skyrim предлагает написать историю Довакина по-новому — буквально его же руками. Игра поддерживает все современные устройства (Oculus Rift, HTC Vive, Windows Mixed Reality, Valve Index) и не требует дополнительных настроек: просто жмите «Новая игра» и размещайтесь поудобнее в стартовой телеге. Стрельба из лука, поединки на мечах, колдовство — всё здесь осуществляется при помощи «ручных» контроллеров, но это лишь самые базовые удобства. Bethesda переработала меню, инвентарь и панель быстрого доступа, чтобы обеспечить действительно невиданный игровой опыт. Всё это — с полным набором дополнений и, разумеется, возможностью ставить моды. Путешествия по Скайриму никогда не были такими иммерсивными!',
//       },
//       requirements: {
//         oc: 'Windows® 7/Vista/XP',
//         cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
//         ram: '2 GB ОЗУ',
//         videocard:
//           'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
//         directx: 'Версии 9.0c',
//         discspace: '15 GB',
//       },
//       activation: {
//         title: 'активация',
//         text: 'активация',
//       },
//     },
//   },
//   {
//     id: 2,
//     title: 'Hohokum',
//     images: '/games/game2.png',
//     cent: 2300,
//     discount: 20,
//     info: {
//       genre: 'Гонки',
//       platform: 'Steam',
//       region: 'Россия',
//       type: 'Ключ',
//     },
//     description: {
//       description: {
//         title: 'Полное погружение в Тамриэль',
//         text: 'Признайтесь, вы ведь тоже сразу после анонса нового поколения VR-шлемов захотели увидеть на них TES V? Тодд Говард вот точно захотел и, как это обычно бывает, воплотил желание в жизнь. Очередной Skyrim предлагает написать историю Довакина по-новому — буквально его же руками. Игра поддерживает все современные устройства (Oculus Rift, HTC Vive, Windows Mixed Reality, Valve Index) и не требует дополнительных настроек: просто жмите «Новая игра» и размещайтесь поудобнее в стартовой телеге. Стрельба из лука, поединки на мечах, колдовство — всё здесь осуществляется при помощи «ручных» контроллеров, но это лишь самые базовые удобства. Bethesda переработала меню, инвентарь и панель быстрого доступа, чтобы обеспечить действительно невиданный игровой опыт. Всё это — с полным набором дополнений и, разумеется, возможностью ставить моды. Путешествия по Скайриму никогда не были такими иммерсивными!',
//       },
//       requirements: {
//         oc: 'Windows® 7/Vista/XP',
//         cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
//         ram: '2 GB ОЗУ',
//         videocard:
//           'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
//         directx: 'Версии 9.0c',
//         discspace: '15 GB',
//       },
//       activation: {
//         title: 'активация',
//         text: 'активация',
//       },
//     },
//   },
//   {
//     id: 3,
//     title: 'E Witne',
//     images: '/games/game3.png',
//     cent: 500,
//     discount: 0,
//     info: {
//       genre: 'Гонки',
//       platform: 'Steam',
//       region: 'Россия',
//       type: 'Ключ',
//     },
//     description: {
//       description: {
//         title: 'Полное погружение в Тамриэль',
//         text: 'Признайтесь, вы ведь тоже сразу после анонса нового поколения VR-шлемов захотели увидеть на них TES V? Тодд Говард вот точно захотел и, как это обычно бывает, воплотил желание в жизнь. Очередной Skyrim предлагает написать историю Довакина по-новому — буквально его же руками. Игра поддерживает все современные устройства (Oculus Rift, HTC Vive, Windows Mixed Reality, Valve Index) и не требует дополнительных настроек: просто жмите «Новая игра» и размещайтесь поудобнее в стартовой телеге. Стрельба из лука, поединки на мечах, колдовство — всё здесь осуществляется при помощи «ручных» контроллеров, но это лишь самые базовые удобства. Bethesda переработала меню, инвентарь и панель быстрого доступа, чтобы обеспечить действительно невиданный игровой опыт. Всё это — с полным набором дополнений и, разумеется, возможностью ставить моды. Путешествия по Скайриму никогда не были такими иммерсивными!',
//       },
//       requirements: {
//         oc: 'Windows® 7/Vista/XP',
//         cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
//         ram: '2 GB ОЗУ',
//         videocard:
//           'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
//         directx: 'Версии 9.0c',
//         discspace: '15 GB',
//       },
//       activation: {
//         title: 'активация',
//         text: 'активация',
//       },
//     },
//   },
// ];
