import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../services/auth';
import Logo from '../assets/logo.jpg';
import { Menu, X, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Videos', path: '/videos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // --- DYNAMIC COLOR HELPER ---
  // This ensures text is visible against both white and black backgrounds
  const getNavTextColor = (active) => {
    if (active) return 'text-mavics-orange';
    if (isScrolled || isMobileMenuOpen) return 'text-white'; // On Black Background
    return 'text-mavics-black'; // On White/Transparent Background
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav 
        ref={menuRef}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-4 md:px-12 
        ${isScrolled || isMobileMenuOpen
          ? 'py-3 bg-mavics-black border-b border-white/10 shadow-2xl' 
          : 'py-5 bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-10 h-10 bg-white rounded-lg overflow-hidden flex items-center justify-center border border-gray-200 shadow-sm">
              <img src={Logo} alt="MAVICS" className="w-full h-full object-cover" />
            </div>
            <span className={`text-xl font-black tracking-tighter uppercase italic transition-colors ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-mavics-black'}`}>
              Mavics
            </span>
          </Link>

          {/* Desktop Navigation - FIXED VISIBILITY */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-mavics-orange 
                ${getNavTextColor(isActive(link.path))}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-3">
                 <span className={`text-[10px] font-black uppercase opacity-60 ${isScrolled ? 'text-white' : 'text-mavics-black'}`}>
                  {user.name}
                 </span>
                 <button onClick={logout} className={`${isScrolled ? 'text-white' : 'text-mavics-black'} hover:text-mavics-orange transition-colors`}>
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link to="/login" className="bg-mavics-orange text-mavics-black px-6 py-2 rounded-lg font-black text-[10px] tracking-widest hover:bg-mavics-black hover:text-white transition-all shadow-md">
                LOGIN
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-all ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-mavics-black bg-mavics-orange'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div className={`
          lg:hidden absolute top-full left-0 w-full bg-mavics-black border-t border-white/5 shadow-2xl p-6 flex flex-col gap-4
          transition-all duration-300 ease-in-out origin-top
          ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
        `}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-black uppercase tracking-tight italic transition-all duration-200 ${isActive(link.path) ? 'text-mavics-orange' : 'text-white/60'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4 mt-2 border-t border-white/10">
            {user ? (
              <div className="flex justify-between items-center">
                 <span className="text-white font-black uppercase text-xs">{user.name}</span>
                 <button onClick={logout} className="text-red-500 font-black uppercase text-xs">Logout</button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-mavics-orange text-mavics-black w-full py-4 rounded-xl font-black text-center block text-xs tracking-[0.2em]">
                CLIENT LOGIN
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;