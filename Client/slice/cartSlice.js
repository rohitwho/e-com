import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    value: [],
    selectedProduct: [],
    selectPage: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.value.find(
        (list) => list._id === action.payload._id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.value.find(
        (item) => item._id === action.payload._id
      );

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity--;
        } else {
          state.value = state.value.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    selectPage: (state, action) => {
      state.selectPage = action.payload;
    },
  },
});
export const selectCount = (state) => state.addToCart.value;

export const selectSelectedProduct = (state) => state.addToCart.selectedProduct;

export const showPage = (state) => state.addToCart.selectPage;

export const { addToCart, removeFromCart, setSelectedProduct,selectPage } =
  addToCartSlice.actions;

export default addToCartSlice.reducers;
