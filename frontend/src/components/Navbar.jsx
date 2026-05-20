import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const hideCTA = ['/', '/schemes'].includes(location.pathname);
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
    { to: '/contact', label: 'Contact' },
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
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="text-gray-900 hover:text-red-600 transition-colors text-sm font-bold">
                {link.label}
              </Link>
            ))}
            <Link to="/admin" className="text-gray-900 hover:text-red-600 transition-colors text-sm font-bold">CRM</Link>

            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="flex items-center gap-1.5 text-gray-900 border border-gray-900 px-4 py-2 rounded-full text-sm font-bold hover:border-red-600 hover:text-red-600 transition-colors">
                  <LayoutDashboard size={15}/> Dashboard
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-1.5 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-red-100 transition-colors">
                  <LogOut size={15}/> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-gray-900 hover:text-red-600 text-sm font-bold transition-colors">Sign In</Link>
                <Link to="/register" className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition-colors font-bold text-sm shadow-md">
                  Get Started
                </Link>
              </div>
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
          className="bg-red-600 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-md hover:scale-105"
        >
          Start Saving Now
        </Link>
        <Link
          to="/schemes"
          className="bg-white border border-gray-300 text-gray-900 px-7 py-2.5 rounded-full text-sm font-bold hover:border-red-600 hover:text-red-600 transition-all hover:scale-105"
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
              className="block text-gray-900 hover:text-red-600 py-2 font-bold transition-colors">
              {link.label}
            </Link>
          ))}
          <Link to="/admin" onClick={() => setMobileOpen(false)} className="block text-gray-900 hover:text-red-600 py-2 font-bold">CRM</Link>

          {/* CTA buttons in mobile menu */}
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

          <div className="pt-3 border-t border-yellow-500 space-y-2">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="block bg-white text-gray-900 py-2.5 px-4 rounded-xl font-bold">Dashboard</Link>
                <button onClick={handleLogout} className="w-full text-left text-red-600 py-2.5 px-4 rounded-xl bg-red-50 font-bold">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="block text-gray-900 py-2 font-bold">Sign In</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="block bg-red-600 text-white py-2.5 px-4 rounded-xl font-bold text-center shadow-md">Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
