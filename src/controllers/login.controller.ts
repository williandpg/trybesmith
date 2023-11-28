import { Request, Response } from 'express';
import LoginService from '../services/login.service';

const validate = (username: string, password: string): 
boolean => (username !== undefined && password !== undefined);

async function getLogin(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  if (!validate(username, password)) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  const { status, data } = await LoginService.getLogin({ username, password });
  return res.status(status).json(data);
}

export default {
  getLogin,
};