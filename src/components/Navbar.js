import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white dark:bg-gray-900 shadow-md py-3"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => navigate("/")}>
          FlowSaaS
        </h1>

        <div className="hidden md:flex items-center gap-8">
          {["features", "pricing", "testimonials", "faq", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleSmoothScroll(e, item)}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium capitalize transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center justify-center text-sm"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => navigate("/onboarding")}
            className="text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/onboarding")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 dark:text-gray-300 text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-4 flex flex-col gap-4">
          {["features", "pricing", "testimonials", "faq", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleSmoothScroll(e, item)}
              className="text-gray-600 dark:text-gray-300 text-sm font-medium capitalize"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-left text-gray-600 dark:text-yellow-400 text-sm font-medium"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <button
            onClick={() => { navigate("/onboarding"); setMenuOpen(false); }}
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;