import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { checkoutCart, getCartItems, updateCart } from '../controllers/cart.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', authenticate, ctrlWrapper(getCartItems));

router.put('/update', authenticate, ctrlWrapper(updateCart));

router.post('/checkout', authenticate, ctrlWrapper(checkoutCart));

export default router;
