import { create } from 'zustand';

interface IGames {
  games: any[];
  inBasket: any[];
  error: null;
  getGames: (items: any) => void;
  getBasketId: (itemId: number) => void;
  deleteBasketId: (itemId: number) => void;
}

interface IBasket {
  games: any[];
  error: null;
  addGame: (game: any) => void;
  deleteGame: (game: any) => void;
}

interface ISearch {
  value: string;
  getValue: (str: string) => void;
}

export const useGames = create<IGames>((set, get) => ({
  games: [],
  inBasket: [],
  error: null,
  getGames: (items) => {
    set({ games: [...items] });
  },
  getBasketId: (itemId) => {
    let flag = true;
    get().inBasket.forEach((item) => {
      if (item === itemId) {
        flag = false;
      }
    });

    if (flag) {
      set({ inBasket: [...get().inBasket, itemId] });
    }
  },
  deleteBasketId: (itemId) => {
    set({
      inBasket: [
        ...get().inBasket.filter((item) => {
          return item !== itemId;
        }),
      ],
    });
  },
}));

export const useBasket = create<IBasket>((set, get) => ({
  games: [],
  error: null,
  addGame: (game) => {
    let flag = true;
    get().games.forEach((item) => {
      if (item.id === game.id) {
        flag = false;
      }
    });

    if (flag) {
      set({ games: [...get().games, { ...game, favorite: true }] });
    }
  },
  deleteGame: (game) => {
    set({
      games: [
        ...get().games.filter((item) => {
          return item.id !== game.id;
        }),
      ],
    });
  },
}));

export const useSearch = create<ISearch>((set) => ({
  value: '',
  getValue: (str) => {
    set({ value: str });
  },
}));
