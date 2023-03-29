import Jwt from 'jsonwebtoken';
import { IJWT } from '../interfaces/User';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const createJWT = ({ id, email }: IJWT) => {
  return Jwt.sign({ id, email}, JWT_SECRET);
}

export const verifyJWT = (token: string) => {
  return Jwt.verify(token, JWT_SECRET);
}
