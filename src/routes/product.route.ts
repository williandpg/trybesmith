import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getProducts);

export default router;