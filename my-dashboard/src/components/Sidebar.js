import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/dashboardSlice";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector((state) => state.dashboard);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: "📊", label: "Dashboard", path: "/" },
    { icon: "💰", label: "Revenue", path: "/revenue" },
    { icon: "👥", label: "Customers", path: "/customers" },
    { icon: "📦", label: "Orders", path: "/orders" },
    { icon: "📈", label: "Analytics", path: "/analytics" },
    { icon: "⚙️", label: "Settings", path: "/settings" },
  ];

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-gray-900 text-white h-screen transition-all duration-300 flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {sidebarOpen && (
          <span className="text-xl font-bold text-green-400">BizDashboard</span>
        )}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="text-gray-400 hover:text-white text-xl"
        >
          ☰
        </button>
      </div>

      <nav className="flex flex-col gap-1 mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
              location.pathname === item.path
                ? "bg-green-500 text-white"
                : "hover:bg-gray-700 text-gray-300"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {sidebarOpen && (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;