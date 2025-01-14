import mongoose, { Schema } from 'mongoose';

const OrderItemSchema = new Schema({
  product: {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    suppliers: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String },
  },
  quantity: { type: Number, required: true },
});
const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [OrderItemSchema],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['cash', 'creditCard'], required: true },
  shippingInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});

export const OrderCollection = mongoose.model('orders', OrderSchema);
