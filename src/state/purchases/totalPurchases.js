import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const LOCAL_STORAGE_NAME = "find-my-cash-purchases";

const initialState = {
  purchases: [],
};

const totalPurchasesSlice = createSlice({
  name: "totalPurchases",
  initialState,
  reducers: {
    addPurchase: (state, action) => {
      state.purchases = [action.payload, ...state.purchases];
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state.purchases));
    },

    removePurchase: (state, action) => {
      state.purchases = state.purchases.filter(
        (purchase) => purchase.id !== action.payload.id
      );
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state.purchases));
    },

    clearPurchases: (state) => {
      state.purchases = [];
      localStorage.removeItem(LOCAL_STORAGE_NAME);
      localStorage.removeItem("find-my-cash-wallet");
    },
  },
});

export const { addPurchase, removePurchase, clearPurchases } =
  totalPurchasesSlice.actions;
export default totalPurchasesSlice.reducer;
