import React, { useState } from "react";
import ItemsStats from "./ItemsStats";
import CategorieStats from "./CategorieStats";

const Statistics = () => {
  const [showItemStats, setShowItemStats] = useState(true);
  return (
    <div className="container border mx-auto my-5 p-5 bg-gray-100 min-h-[85vh]">
      <h1 className="text-center text-3xl p-4">Statistics</h1>

      {/* buttons container */}
      <div className="my-4 flex justify-center gap-2">
        <button
          onClick={() => setShowItemStats(true)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          All Items
        </button>
        <button
          onClick={() => setShowItemStats(false)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Categories
        </button>
      </div>

      {showItemStats ? <ItemsStats /> : <CategorieStats />}
    </div>
  );
};

export default Statistics;
