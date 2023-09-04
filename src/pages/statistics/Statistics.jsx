import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import BarChartComponent from "../../components/charts/BarChartComponent";
import PieChartComponent from "../../components/charts/PieChartComponent";

const Statistics = () => {
  const { data } = useContext(DataContext);
  const [expensiveItem, setExpensiveItem] = useState(null);
  const [transformedData, setTransformedData] = useState([]);

  const transformData = () => {
    const transformed = data.map((item) => ({
      name: item.title,
      value: item.price,
    }));
    setTransformedData(transformed);
  };

  const getExpensiveItem = () => {
    if (data.length > 0) {
      // Find the most expensive item
      const mostExpensive = data.reduce((prev, current) =>
        prev.price > current.price ? prev : current
      );
      setExpensiveItem(mostExpensive);
    }
  };

  useEffect(() => {
    getExpensiveItem();
    transformData();
  }, [data]);

  return (
    <div className="container border mx-auto my-5 p-5 bg-gray-100 min-h-[85vh]">
      <h1 className="text-center text-3xl p-4">Statistics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* card 1 */}
        <div className="p-4 bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center gap-3">
          <h3 className="text-xl">Most Item Spent On:</h3>
          {expensiveItem ? (
            <p className="text-4xl text-center">
              {expensiveItem.title}: {expensiveItem.price}
            </p>
          ) : (
            <p>No data available</p>
          )}
        </div>

        {/* pie chart */}
        <div className="p-2 bg-white shadow-xl rounded-2xl">
          <PieChartComponent pieData={transformedData} pieDataKey={"value"} />
        </div>

        {/* bar chart */}
        <div className="p-2 bg-white shadow-xl rounded-2xl">
          <BarChartComponent dataKeyOne={"title"} dataKeyTwo={"price"} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
