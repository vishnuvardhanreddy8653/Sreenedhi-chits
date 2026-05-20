import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingIcons() {
  return (
    <div className="fixed left-6 bottom-6 flex flex-col space-y-3 z-50">
      <a href="https://wa.me/6302296910" target="_blank" rel="noreferrer" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
        <MessageCircle size={24} />
      </a>
      <a href="tel:+916302296910" className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
        <Phone size={24} />
      </a>
      <a href="https://instagram.com/search_to_find_my_name7" className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a href="#" className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
    </div>
  );
}
