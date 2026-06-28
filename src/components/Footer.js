import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handlePlaceholder = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div>
            <h2
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-indigo-400 mb-4 cursor-pointer"
            >
              FlowSaaS
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              The all-in-one platform built for modern businesses to grow
              faster and smarter.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#features" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#contact" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/privacy-policy"
                  onClick={handlePlaceholder}
                  className="text-gray-400 text-sm hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  onClick={handlePlaceholder}
                  className="text-gray-400 text-sm hover:text-indigo-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  onClick={handlePlaceholder}
                  className="text-gray-400 text-sm hover:text-indigo-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FlowSaaS. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://twitter.com"
              onClick={handlePlaceholder}
              aria-label="Twitter"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              onClick={handlePlaceholder}
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              onClick={handlePlaceholder}
              aria-label="GitHub"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;