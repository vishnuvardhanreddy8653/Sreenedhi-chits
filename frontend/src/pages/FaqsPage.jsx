import React from 'react';
import usePageContent from '../hooks/usePageContent';

const DEFAULT_CONTENT = {
  title: "Frequently Asked Questions (FAQs)",
  faqs: [
    { question: "What is a Chit Fund?", answer: "A Chit Fund is a savings and borrowing scheme where members contribute a fixed amount every month. Each month, one member receives the total collected amount through an auction process." },
    { question: "Is it safe to invest with Srinidhi Chitfunds?", answer: "Yes, we are a registered company and all our operations are completely transparent and regulated by the government." }
  ]
};

export default function FaqsPage() {
  const { content } = usePageContent('faq', DEFAULT_CONTENT);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8">{content.title}</h1>
        
        <div className="space-y-6 text-gray-800">
          {content.faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-6">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
