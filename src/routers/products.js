import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllProductsController,
  getProductByIdController,
} from '../controllers/products.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));

router.get('/:productId', ctrlWrapper(getProductByIdController));

export default router;
