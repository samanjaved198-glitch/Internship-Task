import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/dashboardSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.dashboard);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const allPages = [
    { label: "Dashboard", path: "/" },
    { label: "Revenue", path: "/revenue" },
    { label: "Customers", path: "/customers" },
    { label: "Orders", path: "/orders" },
    { label: "Analytics", path: "/analytics" },
    { label: "Settings", path: "/settings" },
  ];

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
    if (val.trim() === "") {
      setResults([]);
    } else {
      const filtered = allPages.filter((p) =>
        p.label.toLowerCase().includes(val.toLowerCase())
      );
      setResults(filtered);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex items-center justify-between relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 w-64"
        />
        {results.length > 0 && (
          <div className="absolute top-10 left-0 bg-white dark:bg-gray-700 shadow-lg rounded-lg w-64 z-50">
            {results.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  window.location.href = item.path;
                  setSearch("");
                  setResults([]);
                }}
                className="px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-green-50 dark:hover:bg-gray-600 cursor-pointer"
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
            R
          </div>
          <span className="text-gray-700 dark:text-white text-sm font-medium">
            Rana
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;