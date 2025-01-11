import { getAllStores, getNearestStores } from './../services/stores.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export const getAllStoresController = async (req, res, next) => {
  try {
    const { page, perPage } = parsePaginationParams(req.query);
    const stores = await getAllStores({
      page,
      perPage,
    });
    res.status(200).json({
      status: '200',
      message: 'Successfully found stores!',
      data: stores,
    });
  } catch (error) {
    next(error);
  }
};

export const getNearestStoresController = async (req, res, next) => {
  try {
    const stores = await getNearestStores();
    res.status(200).json({
      status: '200',
      message: 'Successfully found nearest stores!',
      data: stores,
    });
  } catch (error) {
    next(error);
  }
};
