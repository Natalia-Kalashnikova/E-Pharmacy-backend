import { ReviewsCollection } from '../db/models/reviews.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllReviews = async ({
  userId,
  page = 1,
  perPage = 10,
  sortOrder = 'ASC',
  sortBy = '_id',
}) => {
  const skip = (page - 1) * perPage;

  const reviewsQuery = ReviewsCollection.find({ userId })
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const reviewsCount = await ReviewsCollection.countDocuments({ userId });

  const reviews = await reviewsQuery.exec();

  const paginationData = calculatePaginationData(reviewsCount, perPage, page);

  return {
    data: reviews,
    ...paginationData,
  };
};
