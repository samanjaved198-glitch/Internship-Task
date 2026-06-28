import { useSearch } from "../context/SearchContext";
import React, { useState, useRef, useEffect } from "react";
import { notifications } from "../data/notifications";
import { useTheme } from "../context/ThemeContext";

const TopNavbar = ({ user }) => {
  const { darkMode, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const { search, setSearch } = useSearch();
  const notificationRef = useRef(null);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 shadow-sm px-6 py-4 flex items-center justify-between transition-colors duration-300">

      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.name || "John"} 
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {today}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-xl px-4 py-2 w-72 border border-transparent dark:border-gray-600 focus-within:ring-2 focus-within:ring-indigo-500 transition">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search dashboard..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log("🔍 Search typed:", e.target.value); // DEBUG
            }}
            className="bg-transparent outline-none w-full text-sm text-gray-900 dark:text-white placeholder-gray-400"
          />
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center justify-center"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
              {notifications.filter((item) => item.unread).length}
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">
              <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Notifications
                </h3>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className="px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-none cursor-pointer transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {item.message}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                          {item.time}
                        </p>
                      </div>
                      {item.unread && (
                        <span className="w-2 h-2 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="font-semibold text-gray-900 dark:text-white">
              {user?.name || "John Doe"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user?.role || "Administrator"}
            </p>
          </div>
          <div className="w-11 h-11 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
            {user?.name
              ? user.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .substring(0, 2)
                  .toUpperCase()
              : "JD"}
          </div>
        </div>

      </div>
    </header>
  );
};

export default TopNavbar;