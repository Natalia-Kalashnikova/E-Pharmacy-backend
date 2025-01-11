import { Types } from 'mongoose';
import { SORT_ORDER } from '../constants/constants.js';
import { ProductsCollection } from '../db/models/products.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllProducts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
    const skip = (page - 1) * perPage;

    console.log('Category filter:', filter.category);

  const productsQuery = ProductsCollection.find();
  if (filter.category) {
    productsQuery.where('category').equals(filter.category);
    }

  if (filter.name) {
    productsQuery.where('name').equals(filter.name);
    }

  const [productsCount, products] = await Promise.all([
    ProductsCollection.find().merge(productsQuery).countDocuments(),
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
