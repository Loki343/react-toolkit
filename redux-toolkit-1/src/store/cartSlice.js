import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, { type, payload }) {
      state.push(payload);
    },
    remove(state, { type, payload }) {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
