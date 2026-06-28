import React, { useState } from "react";
import { faqs } from "../data/mockData";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="text-indigo-600"> Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">Got questions? We have got answers.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-gray-900 font-semibold text-sm">{faq.question}</span>
                <span className="text-indigo-600 text-xl font-bold">{openId === faq.id ? "−" : "+"}</span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;