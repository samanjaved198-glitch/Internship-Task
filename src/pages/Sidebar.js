import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ activeNav, setActiveNav }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: "📊", path: "/dashboard" },
    { label: "Analytics", icon: "📈", path: "/dashboard/analytics" },
    { label: "Projects", icon: "📁", path: "/dashboard/projects" },
    { label: "Team", icon: "👥", path: "/dashboard/team" },
    { label: "Settings", icon: "⚙️", path: "/dashboard/settings" },
  ];

  const handleNav = (item) => {
    setActiveNav(item.label);
    navigate(item.path);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-sm min-h-screen transition-colors duration-300">

      {/* Logo */}
      <div className="px-8 py-8 border-b border-gray-100 dark:border-gray-700">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold text-indigo-600 cursor-pointer"
        >
          FlowSaaS
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          Business Management Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNav(item)}
            className={`w-full flex items-center gap-4 px-5 py-3 rounded-xl text-left font-medium transition-all duration-300 ${
              location.pathname === item.path
                ? "bg-indigo-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Buttons */}
      <div className="border-t border-gray-100 dark:border-gray-700 p-5 space-y-3">

        <button
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-xl border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
        >
          Back to Home
        </button>

        <button
          onClick={handleLogout}
          className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;