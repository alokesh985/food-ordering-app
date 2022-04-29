import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    insertItem: (state, action) => {
      state.cart[action.payload.currentItemName] = {
        qty: 1,
        price: action.payload.currentItemPrice,
      };
    },
    incrementItem: (state, action) => {
      state.cart[action.payload].qty += 1;
    },
    deleteItem: (state, action) => {
      delete state.cart[action.payload];
    },
    decrementItem: (state, action) => {
      state.cart[action.payload].qty -= 1;
    },
  },
});

export const { insertItem, deleteItem, incrementItem, decrementItem } =
  cartSlice.actions;

export const selectCart = (state) => state.cartReducer.cart;

export default cartSlice.reducer;
