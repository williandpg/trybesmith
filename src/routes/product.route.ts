import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import ProductMiddleware from '../middlewares/product.middleware';

const router = Router();

router.post(
  '/',
  ProductMiddleware.productNameMiddleware,
  ProductMiddleware.productPriceMiddleware,
  ProductController.createProduct,
);
router.get('/', ProductController.getProducts);

export default router;