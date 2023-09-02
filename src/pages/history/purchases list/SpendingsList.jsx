import React from "react";
import AddSpending from "./AddSpending";
import Spendings from "./Spendings";

const SpendingsList = () => {
  return (
    <section>
      <h1 className="font-bold text-center text-2xl">Spendings</h1>

      <AddSpending />

      {/* buttons container */}
      {/* <div className="my-4 flex justify-center gap-2">
        <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          All Items
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          Categories
        </button>
      </div> */}

      <Spendings />
    </section>
  );
};

export default SpendingsList;
