import { Request, Response } from 'express';
import ProductService from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { data } = await ProductService.createProduct(req.body);
  return res.status(201).json(data);
}

export default {
  createProduct,
};