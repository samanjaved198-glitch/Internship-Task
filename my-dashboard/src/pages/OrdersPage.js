import React from "react";
import DataTable from "../components/DataTable";
import { kpiData } from "../data/mockData";

const OrdersPage = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {kpiData.slice(2, 4).map((kpi) => (
          <div key={kpi.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{kpi.title}</h3>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{kpi.value}</p>
            <span className={`text-sm font-semibold ${kpi.positive ? "text-green-500" : "text-red-500"}`}>
              {kpi.change} vs last month
            </span>
          </div>
        ))}
      </div>
      <DataTable />
    </div>
  );
};

export default OrdersPage;