import jwt from 'jsonwebtoken';
import { TokenJWT } from '../types/Token';

const SECRET_JWT = process.env.JWT_SECRET || 'secret';

const generateToken = (payload: TokenJWT): string => {
  const token = jwt.sign(payload, SECRET_JWT);
  return token;
};

export default {
  generateToken,
};