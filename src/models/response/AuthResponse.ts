import { IUser } from '../IUser';

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  logged_in: boolean;
  user: IUser;
}
