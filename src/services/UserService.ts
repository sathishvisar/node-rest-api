import { IUserService } from '../interfaces/IUserService';
import { IUser } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { hashPassword, comparePassword } from '../utils/hash';
import { generateToken } from '../utils/jwt';
import { v4 as uuidv4 } from 'uuid';

export class UserService implements IUserService {
  constructor(private repo: UserRepository) {}

  async register(data: Omit<IUser, 'id'>): Promise<IUser> {
    const hashed = await hashPassword(data.password);
    const newUser: IUser = { id: uuidv4(), ...data, password: hashed };
    return this.repo.create(newUser);
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error('User not found');
    const valid = await comparePassword(password, user.password);
    if (!valid) throw new Error('Invalid password');
    return generateToken(user);
  }

  async findAll(): Promise<IUser[]> {
    return this.repo.findAll();
  }

  async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return this.repo.update(id, data);
  }

  async delete(id: string): Promise<boolean> {
    return this.repo.delete(id);
  }
}
