import mongoose, { Schema } from 'mongoose';

const CartItemSchema = new Schema({
  product: {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    suppliers: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String },
  },
  quantity: { type: Number, required: true, min: 1 },
});

const CartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [CartItemSchema],
});

export const CartCollection = mongoose.model('carts', CartSchema);
