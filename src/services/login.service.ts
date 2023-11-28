import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt.util';
import UserModel from '../database/models/user.model';
import { Login } from '../types/Login';
import { Token } from '../types/Token';
import { ServiceResponse } from '../types/ServiceResponse';

const getLogin = async (login: Login): Promise<ServiceResponse<Token>> => {
  if (!login.username || !login.password) {
    return { status: 400, data: { message: '"username" and "password" are required' } };
  }
  const findLogin = await UserModel.findOne({ where: { username: login.username } });
  if (!findLogin || !bcrypt.compareSync(login.password, findLogin.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }
  const { username } = findLogin.dataValues;
  const token = jwt.generateToken({ username });
  return { status: 200, data: { token } };
};

export default {
  getLogin,
};