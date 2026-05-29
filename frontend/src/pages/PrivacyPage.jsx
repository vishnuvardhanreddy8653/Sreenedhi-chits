import React from 'react';
import usePageContent from '../hooks/usePageContent';

const DEFAULT_CONTENT = {
  title: "Privacy Policy",
  sections: [
    { heading: "Welcome to Srinidhi Chitfunds", body: "We understand that privacy online is important to users of our Site, especially when conducting business. This privacy policy applies to our Services." },
    { heading: "Information Collection", body: "We collect personally identifiable information such as your name, address, phone number, and email address to provide you with better services." },
    { heading: "How We Use Information", body: "We use the information to customize the Site, make appropriate service offerings, and fulfill transaction requests." }
  ]
};

export default function PrivacyPage() {
  const { content } = usePageContent('privacy', DEFAULT_CONTENT);

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
