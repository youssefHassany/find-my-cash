import React from "react";
import AddSpending from "./AddSpending";
import Spendings from "./Spendings";

const SpendingsList = () => {
  return (
    <section>
      <h1 className="font-bold text-center text-2xl">Spendings</h1>

      <AddSpending />
      <Spendings />
    </section>
  );
};

export default SpendingsList;
