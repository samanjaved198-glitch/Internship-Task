import React from "react";
import RevenueChart from "../components/RevenueChart";
import SalesChart from "../components/SalesChart";
import CustomerChart from "../components/CustomerChart";
import CategoryChart from "../components/CategoryChart";

const AnalyticsPage = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <SalesChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerChart />
        <CategoryChart />
      </div>
    </div>
  );
};

export default AnalyticsPage;