import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Inline SVGs for brand icons removed from lucide-react v1.x
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const location = useLocation();

  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold text-white uppercase tracking-wider mb-8">
          <div className="flex gap-6 mb-4 md:mb-0">
            <Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-red-500 transition-colors">Terms & Conditions</Link>
            <Link to="/faq" className="hover:text-red-500 transition-colors">FAQ's</Link>
          </div>
        </div>

        <div className="text-center text-white mb-6">
          <p className="text-sm font-bold tracking-wider mb-2 uppercase">
            ©-2020 SRINIDHI CHITS PVT. LTD.
          </p>
          <p className="text-sm font-bold tracking-wider uppercase">
            HAND CRAFTED WITH <span className="text-red-600 text-lg align-middle">❤️</span> BY <span className="text-white">Team-</span><span className="text-red-600">Up!</span>
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a href="tel:+916302296910" className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black hover:bg-red-600 hover:text-white transition-all shadow-md">
            <Phone size={18} />
          </a>
          <a href="https://wa.me/916302296910" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black hover:bg-green-500 hover:text-white transition-all shadow-md">
            <MessageCircle size={18} />
          </a>
          <a href="https://instagram.com/search_to_find_my_name7" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black hover:bg-pink-600 hover:text-white transition-all shadow-md">
            <InstagramIcon />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black hover:bg-blue-600 hover:text-white transition-all shadow-md">
            <FacebookIcon />
          </a>
          <a href="mailto:contact@srinidhichits.com" className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-black hover:bg-red-600 hover:text-white transition-all shadow-md">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
