import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IBasket {
  games: any[];
  inBasket: any[];
  price: number;
  getBasketId: (itemId: number) => void;
  deleteBasketId: (itemId: number) => void;
  addGame: (game: any) => void;
  deleteGame: (game: any) => void;
}

interface ISearch {
  value: string;
  getValue: (str: string) => void;
}

export const useBasket = create(
  persist<IBasket>(
    (set, get) => ({
      games: [],
      inBasket: [],
      price: 0,
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
      addGame: (game) => {
        let flag = true;
        get().games.forEach((item) => {
          if (item.id === game.id) {
            flag = false;
          }
        });

        if (flag) {
          set({
            games: [...get().games, { ...game, favorite: true }],
          });

          if (game.discount > 0) {
            set({
              price:
                get().price +
                Math.round((game.cent * (100 - game.discount)) / 100),
            });
          } else {
            set({
              price: get().price + game.cent,
            });
          }
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
        if (game.discount > 0) {
          set({
            price:
              get().price -
              Math.round((game.cent * (100 - game.discount)) / 100),
          });
        } else {
          set({
            price: get().price - game.cent,
          });
        }
      },
    }),
    { name: 'ToDoLocalStorage' }
  )
);

export const useSearch = create<ISearch>((set) => ({
  value: '',
  getValue: (str) => {
    set({ value: str });
  },
}));
