import React from "react";

const KPICard = ({ title, value, change, positive }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-2">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
      <span
        className={`text-sm font-semibold ${
          positive ? "text-green-500" : "text-red-500"
        }`}
      >
        {change} vs last month
      </span>
    </div>
  );
};

export default KPICard;