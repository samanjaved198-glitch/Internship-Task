import React from "react";

const UserProfile = ({ user, setIsModalOpen }) => {
  const storageUsed = 45;
  const storageTotal = 100;
  const storagePercent = (storageUsed / storageTotal) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">User Profile</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your account information</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Edit Profile
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Side */}
        <div className="flex flex-col items-center lg:w-72">
          <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold">
            {user?.name
              ? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
              : "JD"}
          </div>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
            {user?.name || "John Doe"}
          </h4>
          <span className="mt-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-4 py-1 rounded-full text-sm font-medium">
            {user?.role || "Administrator"}
          </span>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Email", value: user?.email || "john@example.com" },
              { label: "Company", value: user?.company || "Not Provided" },
              { label: "Plan", value: user?.plan || "Professional" },
              { label: "Member Since", value: user?.memberSince || "January 2026" },
              { label: "Team Size", value: user?.teamSize || "Not Selected" },
              { label: "Business Goal", value: user?.goal || "Not Selected" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
                <h4 className="font-semibold text-gray-900 dark:text-white mt-1">{item.value}</h4>
              </div>
            ))}
          </div>

          {/* Storage */}
          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Storage Used</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {storageUsed}GB / {storageTotal}GB
              </span>
            </div>
            <div className="w-full h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-700"
                style={{ width: `${storagePercent}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {storageTotal - storageUsed}GB remaining
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;