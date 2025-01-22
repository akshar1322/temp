import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300 },
  ],
  cart: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) || [] : [],
  wishlist: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('wishlist')) || [] : [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
  },
});

export const { addToCart, addToWishlist } = productSlice.actions;
export default productSlice.reducer;
