import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { checkoutCart, getCartItems, updateCart } from '../controllers/cart.js';

const router = Router();

router.get('/', authenticate, getCartItems);

router.put('/update', authenticate, updateCart);

router.post('/checkout', authenticate, checkoutCart);

export default router;
