import jwt from 'jsonwebtoken';
import { IUser } from '../models/User';

export function generateToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, 'secretKey', {
    expiresIn: '1h',
  });
}
