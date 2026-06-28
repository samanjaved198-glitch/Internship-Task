import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = heroRef.current?.querySelectorAll(".animate-fade");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="animate-fade opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
           Trusted by 10,000+ teams worldwide
        </div>

        <h1 className="animate-fade opacity-0 translate-y-8 transition-all duration-700 delay-100 text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Supercharge Your
          <span className="text-indigo-600"> Workflow</span>
        </h1>

        <p className="animate-fade opacity-0 translate-y-8 transition-all duration-700 delay-200 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          FlowSaaS helps teams collaborate, analyze, and grow faster.
          The all-in-one platform built for modern businesses.
        </p>

        <div className="animate-fade opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => navigate("/onboarding")}
            className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Start For Free →
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all hover:-translate-y-1"
          >
            View Demo
          </button>
        </div>

        <div className="animate-fade opacity-0 translate-y-8 transition-all duration-700 delay-500 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">10K+</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">99.9%</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-indigo-600">4.9★</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Rating</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;