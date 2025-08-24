import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem } from "./cart.helpers";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    setIsCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== productToRemove.id
      );
    },
    addItemToCart: (state, action) => {
      const productToAdd = action.payload;
      console.log("Product to add >>> " + productToAdd);
      state.cartItems = addCartItem(state.cartItems, productToAdd);
    },
    removeItemToCart: (state, action) => {
      const cartItemToRemove = action.payload;
      state.cartItems = removeCartItem(state.cartItems, cartItemToRemove);
    },
  },
});

export const {
  setIsCartOpen,
  setCartItems,
  removeProduct,
  addItemToCart,
  removeItemToCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
