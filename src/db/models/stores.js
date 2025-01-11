import { model, Schema } from 'mongoose';

const storeSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    rating: { type: Number, required: true },
    isOpen: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const StoresCollection = model('stores', storeSchema);
