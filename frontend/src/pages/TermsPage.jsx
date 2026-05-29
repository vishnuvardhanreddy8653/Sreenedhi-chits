import React from 'react';
import usePageContent from '../hooks/usePageContent';

const DEFAULT_CONTENT = {
  title: "Terms and Conditions",
  sections: [
    { heading: "Welcome to Srinidhi Chitfunds", body: "Please read these terms and conditions carefully before using our services." },
    { heading: "Eligibility", body: "You must be at least 18 years of age to participate in a chit fund." },
    { heading: "Contributions and Auctions", body: "All members must pay their monthly contributions on time. Defaults may lead to penalties." }
  ]
};

export default function TermsPage() {
  const { content } = usePageContent('terms', DEFAULT_CONTENT);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8">{content.title}</h1>
        
        <div className="space-y-8 text-gray-800">
          {content.sections.map((sec, index) => (
            <div key={index}>
              {sec.heading && <h3 className="text-xl font-bold mb-3">{sec.heading}</h3>}
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{sec.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
