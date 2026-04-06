import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg'; 

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-mavics-black text-white overflow-hidden">
      {/* Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-mavics-orange/20 via-transparent to-transparent"></div>
      
      {/* Animated Background Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mavics-orange/10 rounded-full blur-[120px] -mr-32 -mt-32 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-mavics-amber/5 rounded-full blur-[100px] -ml-20 -mb-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full border border-mavics-orange/30 bg-mavics-orange/10 text-mavics-orange text-sm font-bold mb-6 tracking-widest uppercase">
              Leading Network Infrastructure
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-6">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-mavics-orange to-mavics-amber">Connectivity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              MAVICS Communications Network Ltd delivers high-performance fiber, satellite, 
              and enterprise security solutions tailored for the Nigerian digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/register" 
                className="bg-mavics-orange hover:bg-white hover:text-mavics-black text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(255,140,0,0.4)] text-center"
              >
                Get Started
              </Link>
              <Link 
                to="/premium" 
                className="bg-mavics-gray/50 backdrop-blur-md border border-white/10 hover:border-mavics-orange text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 text-center"
              >
                Watch Premium
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-mavics-black bg-mavics-gray flex items-center justify-center text-[10px] font-bold">M</div>
                ))}
              </div>
              <p className="text-sm font-medium">Trusted by 500+ Corporations</p>
            </div>
          </div>

          {/* Abstract Logo-Inspired Visual */}
          <div className="hidden lg:flex justify-center relative">
            <div className="w-96 h-96 border-2 border-mavics-orange/20 rounded-3xl rotate-12 absolute animate-[spin_10s_linear_infinite]"></div>
            <div className="w-96 h-96 border border-mavics-amber/10 rounded-3xl -rotate-12 absolute animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="relative z-10 p-8 bg-gradient-to-br from-mavics-gray to-mavics-black rounded-[40px] shadow-2xl border border-white/5">
               <img src={Logo} alt="MAVICS" className="w-64 h-64 object-contain brightness-110 drop-shadow-[0_0_30px_rgba(255,140,0,0.3)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;