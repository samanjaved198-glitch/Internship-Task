import React from "react";
import KPICard from "../components/KPICard";
import RevenueChart from "../components/RevenueChart";
import SalesChart from "../components/SalesChart";
import CustomerChart from "../components/CustomerChart";
import CategoryChart from "../components/CategoryChart";
import DataTable from "../components/DataTable";
import { kpiData } from "../data/mockData";

const Dashboard = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            positive={kpi.positive}
          />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <SalesChart />
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerChart />
        <CategoryChart />
      </div>

      {/* Data Table */}
      <DataTable />
    </div>
  );
};

export default Dashboard;