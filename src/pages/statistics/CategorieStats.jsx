import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import BarChartComponent from "../../components/charts/BarChartComponent";
import PieChartComponent from "../../components/charts/PieChartComponent";

const CategorieStats = () => {
  const { data } = useContext(DataContext);
  const [dataPerCategory, setDataPerCategory] = useState([]);

  const getDataPerCategory = () => {
    const categoryTotalPrices = {};

    data.forEach((item) => {
      const { category, price } = item;

      // If the category doesn't exist in the categoryTotalPrices object, initialize it with the current price
      if (!categoryTotalPrices[category]) {
        categoryTotalPrices[category] = price;
      } else {
        // If the category already exists, add the current price to the existing total
        categoryTotalPrices[category] += price;
      }
    });

    // Convert the categoryTotalPrices object into an array of objects
    setDataPerCategory(
      Object.keys(categoryTotalPrices).map((category) => ({
        category,
        total: categoryTotalPrices[category],
      }))
    );
  };

  const getExpensiveCategory = () => {
    if (dataPerCategory.length > 0) {
      // Find the most expensive item
      const mostExpensive = dataPerCategory.reduce(
        (prev, current) => (prev.total > current.total ? prev : current),
        0
      );
      return mostExpensive;
    }
  };

  const expensiveCategory = getExpensiveCategory();

  useEffect(() => {
    getDataPerCategory();
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* card  */}
      <div className="p-4 bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center gap-3">
        <h3 className="text-xl">Most Category Spent On:</h3>
        {expensiveCategory ? (
          <p className="text-2xl text-center font-medium">
            {expensiveCategory.category}: {expensiveCategory.total}
          </p>
        ) : (
          <p>No data available</p>
        )}
      </div>

      {/* pie chart */}
      <div className="p-2 bg-white shadow-xl rounded-2xl">
        <PieChartComponent pieData={dataPerCategory} pieDataKey={"total"} />
      </div>

      {/* bar chart */}
      <div className="p-2 bg-white shadow-xl rounded-2xl">
        <BarChartComponent
          dataKeyOne={"category"}
          dataKeyTwo={"total"}
          targetData={dataPerCategory}
        />
      </div>
    </div>
  );
};

export default CategorieStats;
