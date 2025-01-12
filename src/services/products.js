import { Types } from 'mongoose';
import { SORT_ORDER } from '../constants/constants.js';
import { ProductsCollection } from '../db/models/products.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllProducts = async ({
  keyword = '',
  category = '',
  page = 1,
  perPage = 9,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
    const skip = (page - 1) * perPage;

    const productsQuery = ProductsCollection.find();
  if (category) {
    productsQuery.where('category').equals(category);
    }

  if (keyword) {
    productsQuery.where('name').regex(new RegExp(keyword, 'i'));
    }

  const [productsCount, products] = await Promise.all([
    ProductsCollection.countDocuments({ ...filter }),
    productsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

    const paginationData = calculatePaginationData(productsCount, perPage, page);

  return {
    data: products,
    ...paginationData,
  };
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findOne({
    _id: new Types.ObjectId(productId),
  });

  return product;
};
