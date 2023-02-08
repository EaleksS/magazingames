import { create } from 'zustand';

interface IGames {
  games: any[];
  loading: boolean;
  error: null;
  basket: boolean;
  favorite: boolean;
  toggleFavoriteGame: (gameId: string | number) => void;
  toggleBasketGame: (gameId: string | number) => void;
}

interface IBasket {
  games: any[];
  loading: boolean;
  error: null;
  addGame: (game: any) => void;
  deleteGame: (game: any) => void;
}

export const useGames = create<IGames>((set, get) => ({
  games: [
    {
      id: 1,
      title: 'Flowen',
      images: './games/game1.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 2,
      title: 'Hohokum',
      images: './games/game2.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 3,
      title: 'E Witne',
      images: './games/game3.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 4,
      title: 'Eastshade',
      images: './games/game4.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 5,
      title: 'Shape',
      images: './games/game5.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 6,
      title: 'Journey',
      images: './games/game6.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 7,
      title: 'Short Hike',
      images: './games/game7.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 8,
      title: 'Little Big Planet',
      images: './games/game8.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 9,
      title: 'Unravel',
      images: './games/game9.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 10,
      title: 'Seasons after Fall',
      images: './games/game10.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 11,
      title: 'Yonder',
      images: './games/game11.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
    {
      id: 12,
      title: 'Minecraft',
      images: './games/game12.png',
      cent: 16400,
      oldCent: 16400,
      favorite: false,
    },
  ],
  loading: false,
  error: null,
  basket: false,
  favorite: false,
  toggleFavoriteGame: (gameId) => {
    set({
      games: get().games.map((game) =>
        game === gameId ? { ...game, favorite: !game.favorite } : game
      ),
    });
  },
  toggleBasketGame: (gameId) => {
    set({
      games: get().games.map((game) =>
        game === gameId ? { ...game, basket: !game.basket } : game
      ),
    });
  },
}));

export const useBasket = create<IBasket>((set, get) => ({
  games: [],
  loading: false,
  error: null,
  addGame: (game) => {
    let flag = true;
    get().games.forEach((item) => {
      if (item.id === game.id) {
        flag = false;
      }
    });

    if (flag) {
      set({ games: [...get().games, game] });
    }
  },
  deleteGame: (game) => {
    get().games.filter((item) => {
      return item.id !== game.id;
    });
    set({
      games: [
        ...get().games.filter((item) => {
          return item.id !== game.id;
        }),
      ],
    });
  },
}));
