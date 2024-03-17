import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spendings: 0,
};

const totalSpendingsSlicer = createSlice({
  name: "spendings",
  initialState,
  reducers: {
    setSpendings: (state, action) => {
      state.spendings = action.payload;
    },

    clearSpendings: (state) => {
      state.spendings = 0;
    },
  },
});

export const { setSpendings, clearSpendings } = totalSpendingsSlicer.actions;
export default totalSpendingsSlicer.reducer;
