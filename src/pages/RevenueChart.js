import React, { useState } from "react";

const allData = {
  "Last 8 Months": [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 62 },
    { month: "Mar", value: 38 },
    { month: "Apr", value: 80 },
    { month: "May", value: 58 },
    { month: "Jun", value: 92 },
    { month: "Jul", value: 74 },
    { month: "Aug", value: 98 },
  ],
  "Last 6 Months": [
    { month: "Mar", value: 38 },
    { month: "Apr", value: 80 },
    { month: "May", value: 58 },
    { month: "Jun", value: 92 },
    { month: "Jul", value: 74 },
    { month: "Aug", value: 98 },
  ],
  "Last 3 Months": [
    { month: "Jun", value: 92 },
    { month: "Jul", value: 74 },
    { month: "Aug", value: 98 },
  ],
};

const RevenueChart = () => {
  const [activeRange, setActiveRange] = useState("Last 8 Months");
  const chartData = allData[activeRange];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Revenue Overview</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Monthly revenue performance</p>
        </div>

        <div className="flex gap-2">
          {Object.keys(allData).map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                activeRange === range
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-72 gap-4">
        {chartData.map((item) => (
          <div key={item.month} className="flex flex-col items-center flex-1 group">
            <div className="relative flex flex-col items-center w-full h-60">
              <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded-lg">
                ${item.value}K
              </div>
              <div className="flex items-end w-full h-full">
                <div
                  className="w-full bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-t-xl transition-all duration-500"
                  style={{ height: `${item.value}%` }}
                />
              </div>
            </div>
            <span className="mt-3 text-sm text-gray-500 dark:text-gray-400">{item.month}</span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Total Revenue</p>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$48,295</h4>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Growth</p>
          <h4 className="text-2xl font-bold text-green-600 mt-1">+18.4%</h4>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Target</p>
          <h4 className="text-2xl font-bold text-indigo-600 mt-1">92%</h4>
        </div>
      </div>

    </div>
  );
};

export default RevenueChart;