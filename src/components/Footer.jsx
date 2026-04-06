import React from 'react';
import { Link } from 'react-router-dom';
// We only keep the standard functional icons that rarely break
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  // Manual SVG paths for brands (Clean, fast, and won't crash your app)
  const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  );

  const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
  );

  const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  );

  return (
    <footer className="bg-mavics-black text-gray-400 pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-mavics-orange rounded-xl flex items-center justify-center font-black text-mavics-black shadow-mavics-glow group-hover:rotate-12 transition-transform">
              M
            </div>
            <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
              Mavics
            </span>
          </Link>
          <p className="text-sm leading-relaxed font-medium">
            Building the network infrastructure that connects businesses and people across Nigeria with speed and security.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-mavics-gray border border-white/5 flex items-center justify-center hover:bg-mavics-orange hover:text-mavics-black transition-all">
              <LinkedinIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-mavics-gray border border-white/5 flex items-center justify-center hover:bg-mavics-orange hover:text-mavics-black transition-all">
              <TwitterIcon />
            </a>
            <a href="#" className="w-10 h-10 rounded-xl bg-mavics-gray border border-white/5 flex items-center justify-center hover:bg-mavics-orange hover:text-mavics-black transition-all">
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 text-mavics-orange">Navigation</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><Link to="/" className="hover:text-mavics-orange transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-mavics-orange transition-colors">Who We Are</Link></li>
            <li><Link to="/services" className="hover:text-mavics-orange transition-colors">Our Services</Link></li>
            <li><Link to="/videos" className="hover:text-mavics-orange transition-colors">Video Library</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 text-mavics-orange">Contact Details</h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <MapPin className="text-mavics-orange shrink-0" size={20} />
              <span className="text-sm font-medium">123 Business Avenue, Victoria Island, Lagos, Nigeria.</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-mavics-orange shrink-0" size={20} />
              <span className="text-sm font-medium">+234 (0) 800 MAVICS</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-mavics-orange shrink-0" size={20} />
              <span className="text-sm font-medium">info@mavics.com.ng</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 text-mavics-orange">Stay Updated</h4>
          <p className="text-xs mb-6 font-medium">Join our mailing list for the latest updates.</p>
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="Business Email" 
              className="w-full bg-mavics-gray border border-white/10 p-4 rounded-2xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-mavics-orange transition-all" 
            />
            <button className="w-full bg-mavics-orange hover:bg-white text-mavics-black font-black py-4 rounded-2xl text-xs uppercase tracking-widest transition-all shadow-mavics-glow">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
          &copy; 2026 MAVICS Communications Network Ltd.
        </p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-600 font-bold">
          <span className="text-mavics-orange italic">PRA Certified 2025</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;