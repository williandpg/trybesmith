import { Request, Response } from 'express';
import ProductService from '../services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  if (!name || !price || !orderId) {
    return res.status(400).json({ error: 'Invalid data Please provide name, price, and orderId.' });
  }
  const { data } = await ProductService.createProduct({ name, price, orderId });
  return res.status(201).json(data);
}

async function getProducts(req: Request, res: Response): Promise<Response> {
  const { data } = await ProductService.getProducts();
  return res.status(200).json(data);
}

export default {
  createProduct,
  getProducts,
};