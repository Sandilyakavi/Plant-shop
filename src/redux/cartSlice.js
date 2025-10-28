import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // [{id, name, price, image, category, quantity}]
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increment(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrement(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    remove(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;