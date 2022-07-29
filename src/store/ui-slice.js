import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, formIsVisible: false },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleForm(state) {
      state.formIsVisible = !state.formIsVisible;
    },
    toggleAll(state) {
      state.cartIsVisible = false;
      state.formIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
