import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductState {
  products: any;
  cart: CartItem[];
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'path-to-image',
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'path-to-image',
      description: 'Description 2',
    },
  ],
  cart: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex > -1) {
        state.cart[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } =
  productSlice.actions;
export default productSlice.reducer;
