'use client' 
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Where is NCC Urban Lake Springs Located?",
    answer: "NCC Urban Lake Springs is located in JP Nagar 9th Phase, Bangalore.",
  },
  {
    question: "What are the unit variants offered in the project?",
    answer: "The project offers 3 and 3.5 BHK apartments.",
  },
  {
    question: "What are the size variants of the apartments?",
    answer: "The size variants of the apartments are 1622 to 2168 sq.ft.",
  },
  {
    question: "What is the total project area?",
    answer: "The total project area is 4.72 acres.",
  },
  {
    question: "Which amenities are offered in the project?",
    answer: "Swimming Pool, Clubhouse, Children's Play Area, Sport Courts, etc.",
  },
  {
    question: "What is the possession date?",
    answer: "The possession date is July 2026 onwards.",
  },
  {
    question: "Is this project RERA approved?",
    answer: "The project received RERA approval.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h3 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-t-lg"
              aria-expanded={openIndex === index}
            >
              <span className="text-gray-800 text-lg font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
