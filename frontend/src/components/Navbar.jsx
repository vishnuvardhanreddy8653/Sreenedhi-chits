import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);
  const location = useLocation();
  const hideCTA = ['/', '/schemes', '/about', '/gallery', '/contact', '/login', '/register', '/work', '/faq', '/terms', '/privacy'].includes(location.pathname);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    setMobileOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/schemes', label: 'Available Chits' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
    { to: '/work', label: 'How it Works ?' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#ffde21] shadow-md border-b border-yellow-500">

      {/* ── Row 1: Logo + Nav links + Auth ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="Srinidhi Chits" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {[...navLinks, { to: isLoggedIn ? '/dashboard' : '/register', label: isLoggedIn ? 'Dashboard' : 'Get Started' }].map(link => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onMouseEnter={() => setHoveredTab(link.to)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`relative px-1 py-2 inline-flex items-center text-[18px] font-extrabold transition-colors duration-300 ease-out z-10 ${
                    isActive ? 'text-white' : 'text-gray-900'
                  }`}
                  style={isActive ? { textShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)' } : {}}
                >
                  {link.label}
                  {isActive ? (
                    <div className="absolute left-0 w-full h-[6px] bg-[#fe2121] -z-10" style={{ top: '56%' }} />
                  ) : (
                    hoveredTab === link.to && (
                      <motion.div
                        className="absolute left-0 h-[6px] bg-[#fe2121] -z-10"
                        style={{ top: '56%' }}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      />
                    )
                  )}
                </Link>
              );
            })}

            {isLoggedIn && (
              <button
                onClick={handleLogout}
                onMouseEnter={() => setHoveredTab('logout')}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative px-1 py-2 inline-flex items-center text-[18px] font-extrabold transition-colors duration-300 ease-out z-10 text-gray-900"
              >
                Logout
                {hoveredTab === 'logout' && (
                  <motion.div
                    className="absolute left-0 h-[6px] bg-[#fe2121] -z-10"
                    style={{ top: '56%' }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
              </button>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-gray-600 hover:text-gray-900 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Row 2: CTA buttons — hidden on Home and Available Chits ── */}
      {!hideCTA && (
      <div className="hidden md:flex justify-center items-center gap-4 py-2.5 bg-[#ffde21] border-t border-yellow-500 animate-in fade-in slide-in-from-top-4 duration-500">
        <Link
          to="/register"
          className="bg-red-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all duration-300 ease-out shadow-md hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(220,38,38,0.35)]"
        >
          Start Saving Now
        </Link>
        <Link
          to="/schemes"
          className="bg-white border border-gray-300 text-gray-900 px-7 py-2.5 rounded-full text-sm font-bold hover:border-red-600 hover:text-red-600 transition-all duration-300 ease-out hover:-translate-y-0.5"
        >
          View Available Plans
        </Link>
      </div>
      )}

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-yellow-500 bg-[#ffde21] px-4 py-4 space-y-2">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
              className="block text-gray-900 hover:text-red-600 py-2 font-bold transition-all duration-300 ease-out hover:-translate-y-0.5">
              {link.label}
            </Link>
          ))}

          {/* CTA buttons in mobile menu */}
          {!hideCTA && (
            <div className="pt-2 flex flex-col gap-2">
              <Link to="/register" onClick={() => setMobileOpen(false)}
                className="bg-red-600 text-white py-2.5 px-4 rounded-full font-bold text-center text-sm shadow-md">
                Start Saving Now
              </Link>
              <Link to="/schemes" onClick={() => setMobileOpen(false)}
                className="bg-white border border-gray-300 text-gray-900 py-2.5 px-4 rounded-full font-bold text-center text-sm">
                View Available Plans
              </Link>
            </div>
          )}

          <div className="pt-3 border-t border-yellow-500 space-y-2">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="block bg-white text-gray-900 py-2.5 px-4 rounded-xl font-bold">Dashboard</Link>
                <button onClick={handleLogout} className="w-full text-left text-red-600 py-2.5 px-4 rounded-xl bg-red-50 font-bold">Logout</button>
              </>
            ) : (
              <>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="block bg-red-600 text-white py-2.5 px-4 rounded-xl font-bold text-center shadow-md">Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
