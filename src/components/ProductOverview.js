import React from "react";

const steps = [
  {
    number: "01",
    icon: "🚀",
    title: "Get Started in Minutes",
    description:
      "Sign up for free and set up your workspace in under 5 minutes. No credit card required.",
  },
  {
    number: "02",
    icon: "⚙️",
    title: "Connect Your Tools",
    description:
      "Integrate with 100+ apps you already use — Slack, Notion, GitHub, and more.",
  },
  {
    number: "03",
    icon: "📈",
    title: "Watch Your Team Thrive",
    description:
      "Track performance, automate workflows, and grow your business with real-time insights.",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "40%", label: "Avg. Productivity Boost" },
  { value: "24/7", label: "Customer Support" },
];

const ProductOverview = () => {
  return (
    <section id="overview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Everything your team needs,{" "}
            <span className="text-indigo-600">in one place</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            FlowSaaS simplifies the way teams work — from day-to-day tasks to
            high-level strategy. Here's how it works.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-start p-8 bg-indigo-50 rounded-3xl border border-indigo-100 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-5xl font-black text-indigo-100 absolute top-6 right-6 select-none">
                {step.number}
              </span>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-5">
                {step.icon}
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-indigo-600 rounded-3xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-indigo-200 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductOverview;