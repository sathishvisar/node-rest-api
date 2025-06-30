import { IUser } from '../models/User';

export interface IUserService {
  register(data: Omit<IUser, 'id'>): Promise<IUser>;
  login(email: string, password: string): Promise<string>;
  findAll(): Promise<IUser[]>;
  update(id: string, data: Partial<IUser>): Promise<IUser | null>;
  delete(id: string): Promise<boolean>;
}
