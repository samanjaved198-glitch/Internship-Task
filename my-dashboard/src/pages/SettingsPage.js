import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/dashboardSlice";

const SettingsPage = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.dashboard);

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h1>

      {/* Theme Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
          Appearance
        </h2>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-gray-800 dark:text-white font-medium">Theme Mode</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Currently using {theme === "dark" ? "Dark" : "Light"} Mode
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">☀️ Light</span>
            <div
              onClick={() => dispatch(toggleTheme())}
              className={`w-14 h-7 rounded-full cursor-pointer transition-colors duration-300 relative ${
                theme === "dark" ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-all duration-300 ${
                  theme === "dark" ? "left-8" : "left-1"
                }`}
              />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">🌙 Dark</span>
          </div>
        </div>

        {/* Preview Box */}
        <div className={`rounded-xl p-4 border ${
          theme === "dark"
            ? "bg-gray-900 border-gray-700 text-white"
            : "bg-gray-50 border-gray-200 text-gray-800"
        }`}>
          <p className="text-sm font-medium">Preview</p>
          <p className="text-xs mt-1 opacity-60">
            This is how your dashboard looks in {theme === "dark" ? "Dark" : "Light"} Mode
          </p>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
          Profile
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            R
          </div>
          <div>
            <p className="text-gray-800 dark:text-white font-semibold">Rana</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;