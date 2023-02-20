import axios from 'axios';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { API_URL } from '../http';
import { IUser } from '../models/IUser';
import { AuthResponse } from '../models/response/AuthResponse';
import AuthService from '../services/AuthService';

interface IBasket {
  games: any[];
  price: number;
  addGame: (game: any) => void;
  deleteGame: (game: any) => void;
}

interface ISearch {
  value: string;
  getValue: (str: string) => void;
}

interface LoginState {
  user: IUser;
  isAuth: boolean;
  setUser: (user: IUser) => void;
  setAuth: (bool: boolean) => void;
  login: (email: string, password: string) => void;
  register: (
    name: string,
    email: string,
    photo: string,
    password: string,
    passwordConfirm: string
  ) => void;
  logout: () => void;
  checkAuth: () => void;
}

export const useBasket = create(
  persist<IBasket>(
    (set, get) => ({
      games: [],
      price: 0,
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

export const useStore = create(
  persist<LoginState>(
    (set, get) => ({
      user: {
        name: '',
        email: '',
        photo: '',
        id: '',
        created_at: '',
        update_at: '',
      },
      isAuth: false,
      setUser: (user) => {
        set({ user: user });
      },
      setAuth: (bool) => {
        set({ isAuth: bool });
      },
      login: async (email, password) => {
        try {
          const response = await AuthService.login(email, password);
          console.log(response.data.access_token);
          console.log(response.data.refresh_token);
          localStorage.setItem('token', response.data.access_token);
          get().setAuth(true);
          const responseUser = await axios.get(`${API_URL}/users/me`, {
            withCredentials: true,
          });
          get().setUser(responseUser.data);
        } catch (e: any) {
          console.log(e.response?.data?.message);
        }
      },
      register: async (name, email, photo, password, passwordConfirm) => {
        const response = await AuthService.register(
          name,
          email,
          photo,
          password,
          passwordConfirm
        );
        console.log(response);
        try {
        } catch (error: any) {
          console.log(error?.message);
        }
      },
      logout: async () => {
        try {
          await AuthService.logout();
          localStorage.removeItem('token');
          get().setAuth(false);
          get().setUser({} as IUser);
        } catch (e: any) {
          console.log(e.response?.data?.message);
        }
      },
      checkAuth: async () => {
        try {
          const response = await axios.get<AuthResponse>(
            `${API_URL}/auth/refresh`,
            { withCredentials: true }
          );
          localStorage.setItem('token', response.data.access_token);
          const responseUser = await axios.get(`${API_URL}/users/me`, {
            withCredentials: true,
          });
          console.log(responseUser.status);
          get().setUser(responseUser.data);
          get().setAuth(true);
        } catch (error) {}
      },
    }),
    { name: 'ToDoLocalStorage' }
  )
);
