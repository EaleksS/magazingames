import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/login', { email, password });
  }

  static async register(
    name: string,
    email: string,
    photo: string,
    password: string,
    passwordConfirm: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/register', {
      name,
      email,
      photo,
      password,
      passwordConfirm,
    });
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>('/auth/logout');
  }
}
