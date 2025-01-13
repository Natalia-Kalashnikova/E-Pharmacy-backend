import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllCategoriesController,
  getAllProductsController,
  getProductByIdController,
} from '../controllers/products.js';

const router = Router();

router.get('/', ctrlWrapper(getAllProductsController));

router.get('/:productId', ctrlWrapper(getProductByIdController));

router.get('/all/categories', ctrlWrapper(getAllCategoriesController));

export default router;
