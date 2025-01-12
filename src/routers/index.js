import { Router } from 'express';
import productsRouter from './products.js';
import authRouter from './auth.js';
import storesRouter from './stores.js';
import reviewsRouter from './reviews.js';
import cartRouter from './cart.js';

const router = Router();

router.use('/user', authRouter);
router.use('/products', productsRouter);
router.use('/stores', storesRouter);
router.use('/customer-reviews', reviewsRouter);
router.use('/cart', cartRouter);

export default router;
