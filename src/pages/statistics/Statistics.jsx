import React, { useContext, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DataContext } from "../../App";

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
            <p className="text-4xl">
              {expensiveItem.title}: {expensiveItem.price}
            </p>
          ) : (
            <p>No data available</p>
          )}
        </div>

        {/* pie chart */}
        <div className="p-2 bg-white shadow-xl rounded-2xl">
          {/* <h3 className="text-center text-2xl p-4">Analysis</h3> */}
          <PieChart width={300} height={250} className="mx-auto">
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={transformedData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#059669"
              label
            />
            <Tooltip />
          </PieChart>
          {/* <ResponsiveContainer>
          </ResponsiveContainer> */}
        </div>

        {/* bar chart */}
        <div className="p-2 bg-white shadow-xl rounded-2xl">
          {/* <h3 className="text-center text-2xl p-4">Analysis</h3> */}
          <BarChart
            className="flex items-center justify-center"
            width={300}
            height={250}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="title" fill="#059669" />
            <Bar dataKey="price" fill="#059669" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
