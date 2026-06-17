import React from "react";
import CustomerChart from "../components/CustomerChart";
import DataTable from "../components/DataTable";

const CustomersPage = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Customers</h1>
      <CustomerChart />
      <DataTable />
    </div>
  );
};

export default CustomersPage;