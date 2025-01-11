import { model, Schema } from 'mongoose';

const reviewSchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    testimonial: { type: String, required: true },
  },
  { timestamps: true },
);

export const ReviewsCollection = model('reviews', reviewSchema);
