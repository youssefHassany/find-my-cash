import React, { useContext } from "react";
import {
  Tooltip,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { DataContext } from "../../App";

const BarChartComponent = ({ dataKeyOne, dataKeyTwo }) => {
  const { data } = useContext(DataContext);
  return (
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
      <Bar dataKey={dataKeyOne} fill="#059669" />
      <Bar dataKey={dataKeyTwo} fill="#059669" />
    </BarChart>
  );
};

export default BarChartComponent;
