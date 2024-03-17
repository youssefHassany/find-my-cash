import React from "react";
import AddSpending from "./AddSpending";
import SpendingsList from "./SpendingsList";

const Spendings = () => {
  return (
    <section>
      <h1 className="font-bold text-center text-2xl">Spendings</h1>

      <AddSpending />
      <SpendingsList />
    </section>
  );
};

export default Spendings;
