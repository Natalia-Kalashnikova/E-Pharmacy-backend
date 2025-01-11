import { model, Schema, Types } from 'mongoose';

const productSchema = new Schema(
  {
    _id: { type: Types.ObjectId, required: true },
    photo: { type: String, required: true },
    name: { type: String, required: true },
    suppliers: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [
      {
        name: { type: String, required: true },
        date: { type: Date, required: true },
        rating: { type: Number, required: true },
        text: { type: String, required: true },
      },
    ],
  },
  { timestamps: true },
);

export const ProductsCollection = model('products', productSchema);
