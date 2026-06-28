import React, { useState } from "react";
import { pricingPlans } from "../data/mockData";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan.id);
    setTimeout(() => {
      navigate("/onboarding", { state: { selectedPlan: plan.name } });
    }, 300);
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent
            <span className="text-indigo-600"> Pricing</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that works best for you. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 relative transition-all duration-300 cursor-pointer ${
                plan.popular
                  ? "bg-indigo-600 text-white shadow-2xl scale-105"
                  : "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md hover:shadow-xl hover:-translate-y-1"
              } ${selectedPlan === plan.id ? "ring-4 ring-yellow-400" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                {plan.name}
              </h3>

              <p className={`text-sm mb-6 ${plan.popular ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.popular ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className={plan.popular ? "text-yellow-400" : "text-indigo-600"}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan)}
                className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;