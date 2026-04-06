import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../services/auth';
import Logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const location = useLocation();

  // Handle scroll effect for glassmorphism transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Videos', path: '/videos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] mb-20 transition-all duration-500 px-6 md:px-12 
      ${isScrolled 
        ? 'py-4 bg-mavics-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'py-6 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-mavics-orange rounded-xl flex items-center justify-center font-black text-mavics-black transform group-hover:rotate-12 transition-all duration-300 shadow-mavics-glow">
            <img src={Logo} alt="MAVICS" />
          </div>
  
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-mavics-orange 
              ${isActive(link.path) ? 'text-mavics-orange' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions (Auth/User) */}
        <div className="hidden lg:flex items-center space-x-6">
          {user ? (
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-gray-500 font-bold uppercase leading-none">Welcome</span>
                <span className="text-xs text-white font-black">{user.name}</span>
              </div>
              
              <div className="h-8 w-[1px] bg-white/10"></div>
              
              {user.role === 'admin' && (
                <Link 
                  to="/admin/dashboard" 
                  className="bg-mavics-orange/10 border border-mavics-orange/30 text-mavics-orange px-3 py-1 rounded-lg text-[10px] font-black hover:bg-mavics-orange hover:text-white transition-all"
                >
                  DASHBOARD
                </Link>
              )}
              
              <button 
                onClick={logout} 
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Logout"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-mavics-orange hover:bg-white hover:text-mavics-black text-mavics-black px-8 py-3 rounded-xl font-black text-xs tracking-widest transition-all duration-300 shadow-mavics-glow active:scale-95"
            >
              CLIENT LOGIN
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-mavics-black border-t border-white/5 p-8 flex flex-col space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-black uppercase tracking-widest ${isActive(link.path) ? 'text-mavics-orange' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-white/10">
            {user ? (
              <button onClick={logout} className="text-red-500 font-black uppercase">Log Out</button>
            ) : (
              <Link to="/login" className="bg-mavics-orange text-mavics-black w-full py-4 rounded-xl font-black text-center block">LOGIN</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;