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
  const { isLoading, res } = useGamesQuery();
  const { addBasket, getBasketId, inBasket } = useBasket((state) => ({
    addBasket: state.addGame,
    getBasketId: state.getBasketId,
    inBasket: state.inBasket,
    deleteBasketId: state.deleteBasketId,
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

const sd: any = [
  {
    id: 1,
    title: 'Flowen',
    images: '/games/game1.png',
    cent: 1423,
    discount: 0,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 2,
    title: 'Hohokum',
    images: '/games/game2.png',
    cent: 2300,
    discount: 20,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 3,
    title: 'E Witne',
    images: '/games/game3.png',
    cent: 500,
    discount: 0,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 4,
    title: 'Eastshade',
    images: '/games/game4.png',
    cent: 200,
    discount: 5,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 5,
    title: 'Shape',
    images: './games/game5.png',
    cent: 600,
    discount: 50,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 6,
    title: 'Journey',
    images: '/games/game6.png',
    cent: 900,
    discount: 10,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 7,
    title: 'Short Hike',
    images: '/games/game7.png',
    cent: 1640,
    discount: 99,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 8,
    title: 'Little Big Planet',
    images: '/games/game8.png',
    cent: 666,
    discount: 0,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 9,
    title: 'Unravel',
    images: '/games/game9.png',
    cent: 3400,
    discount: 0,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 10,
    title: 'Seasons after Fall',
    images: '/games/game10.png',
    cent: 1200,
    discount: 5,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 11,
    title: 'Yonder',
    images: '/games/game11.png',
    cent: 1700,
    discount: 50,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
  {
    id: 12,
    title: 'Minecraft',
    images: '/games/game12.png',
    cent: 700,
    discount: 0,
    info: ['Гонки', 'Steam', 'Россия', 'Ключ'],
    description: [
      {
        desc: 'desc',
        title: 'Описание',
        text: 'Текст',
      },
      {
        windows: 'windows',
        oc: 'Windows® 7/Vista/XP',
        cpu: 'Intel® Core™ 2 Duo E6600 или AMD Phenom™ X3 8750',
        ram: '2 GB ОЗУ',
        videocard:
          'Видеокарта с 256 МБ памяти или больше, совместимая с DirectX 9 с поддержкой Pixel Shader 3.0',
        directx: 'Версии 9.0c',
        discspace: '15 GB',
      },
      {
        activate: 'activate',
        title: 'активация',
        text: 'активация',
      },
    ],
  },
];
