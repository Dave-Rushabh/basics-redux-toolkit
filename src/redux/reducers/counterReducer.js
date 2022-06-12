import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterHandler",
  initialState: {
    counterValue: 0,
  },
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
