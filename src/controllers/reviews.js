import { parseFilterParams } from '../utils/parseFilterParams.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { getAllReviews } from '../services/reviews.js';

export const getAllReviewsController = async (req, res, next) => {
  try {
    const { page, perPage } = parsePaginationParams(req.query);
    const { sortBy, sortOrder } = parseSortParams(req.query);
    const filter = parseFilterParams(req.query);

    const reviews = await getAllReviews({
      page,
      perPage,
      sortBy,
      sortOrder,
      filter,
    });

    res.status(200).json({
      status: '200',
      message: 'Successfully found reviews!',
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};
