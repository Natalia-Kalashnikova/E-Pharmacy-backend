import {
  getAllCategories,
  getAllProducts,
  getProductById,
} from '../services/products.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductsController = async (req, res, next) => {
  try {
    const { page, perPage } = parsePaginationParams(req.query);
    const { sortBy, sortOrder } = parseSortParams(req.query);
    const filter = parseFilterParams(req.query);

    const products = await getAllProducts({
      page,
      perPage,
      sortBy,
      sortOrder,
      filter,
    });

    res.status(200).json({
      status: '200',
      message: 'Successfully found products!',
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductByIdController = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await getProductById(productId);

    if (!product) {
      return res.status(404).json({
        status: '404',
        message: 'Product not found',
        data: null,
      });
    }

    res.status(200).json({
      status: '200',
      message: `Successfully found product with id ${productId}!`,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategoriesController = async (req, res, next) => {
  try {
    const categories = await getAllCategories();

    res.status(200).json({
      status: '200',
      message: 'Successfully fetched categories!',
      data: categories,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    next(error);
  }
};
