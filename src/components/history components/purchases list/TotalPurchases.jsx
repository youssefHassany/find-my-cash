import React from "react";
import { useSelector } from "react-redux";

const TotalPurchases = () => {
  const totalSpending = useSelector((state) => state.totalSpendings.spendings);

  return (
    <div className="w-full md:w-1/2 bg-gray-300 rounded p-4 mx-auto my-4">
      <p className="text-xl text-center font-bold underline">
        Total Spending: {totalSpending}
      </p>
    </div>
  );
};

export default TotalPurchases;
