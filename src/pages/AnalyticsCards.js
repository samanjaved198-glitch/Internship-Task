import React from "react";

const analytics = [
  {
    title: "Total Revenue",
    value: "$48,295",
    change: "+12.5%",
    positive: true,
    color: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-600 dark:text-green-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Active Users",
    value: "3,842",
    change: "+8.2%",
    positive: true,
    color: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-600 dark:text-blue-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "New Signups",
    value: "284",
    change: "+5.1%",
    positive: true,
    color: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    title: "Churn Rate",
    value: "2.4%",
    change: "-0.5%",
    positive: false,
    color: "bg-red-100 dark:bg-red-900",
    iconColor: "text-red-600 dark:text-red-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
  },
];

const AnalyticsCards = ({ search = "" }) => {
  const filtered = analytics.filter(
    (card) =>
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl ${card.color} ${card.iconColor} flex items-center justify-center`}>
                  {card.icon}
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  card.positive
                    ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                    : "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400"
                }`}>
                  {card.change}
                </span>
              </div>

              <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {card.title}
              </h3>

              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {card.value}
              </p>

              <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
                Compared to last month
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center py-10 text-gray-400 dark:text-gray-500">
            No analytics found for "{search}"
          </div>
        )}
      </div>
    </section>
  );
};

export default AnalyticsCards;