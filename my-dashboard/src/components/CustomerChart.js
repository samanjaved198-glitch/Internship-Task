import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { customerGrowthData } from "../data/mockData";

const CustomerChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <h2 className="text-gray-800 dark:text-white font-semibold text-lg mb-4">
        Customer Growth
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={customerGrowthData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="customers"
            stroke="#4ade80"
            fill="#bbf7d0"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerChart;