import React from "react";
import { recentActivity } from "../data/mockData";
import { useSearch } from "../context/SearchContext";

const RecentActivity = () => {
  const { search } = useSearch();

  const filteredActivities = recentActivity.filter((activity) =>
    activity.action.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Recent Activity
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Latest updates from your workspace
          </p>
        </div>
        <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-2xl flex-shrink-0">
                {activity.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 dark:text-white font-semibold">
                  {activity.action}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {activity.time}
                </p>
              </div>
              <span className="text-green-500 text-xs font-semibold bg-green-100 dark:bg-green-900 dark:text-green-400 px-3 py-1 rounded-full">
                Completed
              </span>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-gray-400 dark:text-gray-500">
              {search ? `No activities found for "${search}"` : "No activities yet."}
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-100 dark:border-gray-700 mt-6 pt-4 text-center">
        <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
          Load More Activities
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;