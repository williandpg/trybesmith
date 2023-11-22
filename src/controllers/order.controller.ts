import { Request, Response } from 'express';
import OrderService from '../services/order.service';

async function getOrders(req: Request, res: Response): Promise<Response> {
  const { data } = await OrderService.getOrders();
  return res.status(200).json(data);
}

export default {
  getOrders,
};