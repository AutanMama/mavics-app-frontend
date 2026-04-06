import React from 'react';

const About = () => {
  return (
    <div className="bg-mavics-soft min-h-screen pt-24">
      {/* Hero Header Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-mavics-orange/20 bg-mavics-orange/5 text-mavics-orange text-xs font-black tracking-[0.3em] uppercase mb-6">
            Establishing Standards
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-mavics-black mb-8 leading-tight">
            The Backbone of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mavics-orange to-mavics-amber">Digital Nigeria</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            MAVICS Communications Network Ltd. is a premier infrastructure entity 
            engineered to bridge the gap between complex technology and seamless human connection.
          </p>
        </div>
      </section>

      {/* Corporate Identity: Mission & Vision */}
      <section className="py-20 bg-mavics-black relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Mission Card */}
          <div className="group p-1 bg-gradient-to-br from-mavics-orange/20 to-transparent rounded-[2.5rem]">
            <div className="bg-mavics-gray h-full p-12 rounded-[2.4rem] border border-white/5 transition-all duration-500 group-hover:border-mavics-orange/30">
              <div className="w-16 h-16 bg-mavics-orange rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-mavics-glow transform group-hover:-rotate-6 transition-transform">
                🚀
              </div>
              <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Our Mission</h4>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                To engineer efficient, innovative, and customer-centric network 
                ecosystems that facilitate robust connectivity and exponential business scalability.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group p-1 bg-gradient-to-br from-mavics-amber/20 to-transparent rounded-[2.5rem]">
            <div className="bg-mavics-gray h-full p-12 rounded-[2.4rem] border border-white/5 transition-all duration-500 group-hover:border-mavics-amber/30">
              <div className="w-16 h-16 bg-mavics-amber rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg transform group-hover:rotate-6 transition-transform">
                🌍
              </div>
              <h4 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Our Vision</h4>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                To define the future of communications infrastructure as the most 
                trusted digital catalyst across the African continent.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Compliance & Regulatory Trust */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="relative bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
          
          {/* Decorative Orange Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-mavics-orange/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>

          <div className="flex-1 relative z-10 text-center md:text-left">
            <h3 className="text-4xl font-black text-mavics-black mb-6 uppercase tracking-tighter italic">
              Certified Compliance
            </h3>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
              Operational integrity is our foundation. MAVICS strictly adheres to the 
              <span className="text-mavics-black font-bold"> Pension Reform Act (PRA) 2014</span>, 
              ensuring 100% regulatory alignment and fiscal transparency.
            </p>
            <div className="inline-flex items-center gap-4 bg-green-50 text-green-700 border border-green-200 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest">
              <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">✓</span>
              2025 Pension Compliance Certified
            </div>
          </div>

          <div className="flex-1 w-full grid grid-cols-2 gap-6 relative z-10">
            <div className="bg-mavics-black p-10 rounded-[2rem] text-center transform hover:-translate-y-2 transition-transform duration-300">
              <span className="block text-5xl font-black text-mavics-orange mb-2 leading-none">100%</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Legal Compliance</span>
            </div>
            <div className="bg-mavics-orange p-10 rounded-[2rem] text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-mavics-glow">
              <span className="block text-5xl font-black text-white mb-2 leading-none">2025</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-mavics-black">Active Status</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;