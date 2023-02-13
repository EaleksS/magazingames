import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import { Basket } from './pages/Basket';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { GamePage } from './pages/gamePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

console.log(JSON.stringify([
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
]));


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path={`/game/:id`} element={<GamePage />}></Route>;
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
