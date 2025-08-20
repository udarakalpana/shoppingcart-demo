import { createSlice } from "@reduxjs/toolkit";
import type { ICartSliceState } from "../types/product";

const initialState: ICartSliceState = {
  products: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push({...action.payload});
      console.log(action.payload);
    }
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
