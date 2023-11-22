import express from 'express';
import productRoutes from './routes/product.route';
import orderRoutes from './routes/order.route';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

export default app;