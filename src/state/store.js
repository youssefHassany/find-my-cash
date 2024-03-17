import { configureStore } from "@reduxjs/toolkit";
import totalPurchasesReducer from "./purchases/totalPurchases";
import totalSpendingsReducer from "./spendings/totalSpendings";

// Create preloaded state using passed arguments
const createPreloadedState = (purchasesData, spendingsData) => {
  return {
    totalPurchases: { purchases: purchasesData },
    totalSpendings: { spendings: spendingsData },
  };
};

// Fetch data before store initialization
const purchasesData =
  JSON.parse(localStorage.getItem("find-my-cash-purchases")) || [];
const spendingsData = parseFloat(localStorage.getItem("total-spendings")) || 0;

const preloadedState = createPreloadedState(purchasesData, spendingsData);

// Create store with reducers and preloaded state
export const store = configureStore({
  reducer: {
    totalPurchases: totalPurchasesReducer,
    totalSpendings: totalSpendingsReducer,
  },
  preloadedState,
});
