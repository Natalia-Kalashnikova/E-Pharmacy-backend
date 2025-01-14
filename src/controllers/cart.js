import { CartCollection } from '../db/models/cart.js';
import { ProductsCollection } from '../db/models/products.js';
import { OrderCollection } from '../db/models/orders.js';

export const updateCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
      const { productId, quantity } = req.body;

    if (quantity < 0) {
      return res.status(400).json({ message: 'Quantity must be at least 0' });
    }

      const product = await ProductsCollection.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

      const cart = await CartCollection.findOne({ userId });

     if (!cart) {
      if (quantity === 0) {
        return res
          .status(400)
          .json({ message: 'Cannot create cart with quantity 0' });
      }

       const newCart = new CartCollection({
        userId,
        items: [{ product, quantity }],
      });

      await newCart.save();
      return res.status(201).json({ message: 'Cart created and item added' });
      }

    const itemIndex = cart.items.findIndex((item) =>
      item.product._id.equals(productId),
    );

   if (quantity === 0) {
      if (itemIndex !== -1) {
        cart.items.splice(itemIndex, 1);
      } else {
        return res.status(404).json({ message: 'Product not found in cart' });
      }
    } else {
      if (itemIndex !== -1) {
        cart.items[itemIndex].quantity = quantity;
      } else {
        cart.items.push({ product, quantity });
      }
    }

    await cart.save();
    res.status(200).json({ message: 'Cart updated successfully' });
  } catch (error) {
    next(error);
  }
};

export const getCartItems = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const cart = await CartCollection.findOne({ userId });

    if (!cart) {
      return res.status(200).json({ data: [], message: 'Cart is empty' });
      }

    res.status(200).json({
      status: '200',
      data: cart.items,
      message: 'Successfully fetched cart items',
    });
  } catch (error) {
    next(error);
  }
};

export const checkoutCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const cart = await CartCollection.findOne({ userId });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const totalAmount = cart.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
    const newOrder = new OrderCollection({
      userId,
      items: cart.items,
      totalAmount,
      paymentMethod: req.body.paymentMethod,
      shippingInfo: req.body.shippingInfo,
    });
    await newOrder.save();

    await CartCollection.deleteOne({ userId });

    res.status(201).json({
      message: 'Order placed successfully',
      orderId: newOrder._id, });
  } catch (error) {
    next(error);
  }
};
