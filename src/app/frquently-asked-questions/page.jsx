"use client"
import React, { useState } from 'react';

const Page = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all items in their original condition.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide with additional shipping charges.',
    },
    {
      question: 'How can I track my order?',
      answer: 'You will receive a tracking link via email once your order ships.',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className="w-full bg-blue-600 py-6 text-center text-white">
        <h1 className="text-3xl font-bold">Welcome to Our FAQ Page</h1>
        <p className="mt-2 text-lg">Find answers to your most frequently asked questions below</p>
      </header>

      {/* FAQ Section */}
      <main className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg text-gray-700 font-medium">{faq.question}</span>
                <svg
                  className={`h-6 w-6 text-gray-500 transform transition-transform ${
                    openQuestion === index ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openQuestion === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </main>
</div>
  );
};

export default Page;
