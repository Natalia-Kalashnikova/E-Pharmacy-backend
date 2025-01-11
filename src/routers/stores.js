import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllStoresController,
  getNearestStoresController,
} from '../controllers/stores.js';

const router = Router();

router.get('/', ctrlWrapper(getAllStoresController));

router.get('/nearest', ctrlWrapper(getNearestStoresController));

export default router;
