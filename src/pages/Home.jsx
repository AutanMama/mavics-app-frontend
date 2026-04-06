import React from 'react';
import Hero from "../components/Hero";
import AdvertBanner from "../components/AdvertBanner";
import ServiceCard from "../components/ServiceCard";
import ChatBox from "../components/ChatBox";

const Home = () => (
  <div className="bg-mavics-soft min-h-screen">
    {/* High-Impact Hero Section */}
    <Hero />

    <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
      {/* Dynamic Advert Banner - Styled for Premium Look */}
      <div className="mb-24 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5">
        <AdvertBanner placement="home" />
      </div>

      {/* Section Header with Industrial Branding */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[2px] bg-mavics-orange"></div>
          <span className="text-xs font-black uppercase tracking-[0.4em] text-mavics-orange">
            Our Specializations
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-mavics-black uppercase tracking-tighter italic">
          Infrastructure <br />
          <span className="text-gray-400">Simplified.</span>
        </h2>
      </div>

      {/* Service Grid - Using the Updated Professional ServiceCard */}
      <div className="grid md:grid-cols-3 gap-8 mb-32">
        <ServiceCard
          title="Telecommunications Support"
          desc="Tier-1 network support and managed services for enterprise-grade stability."
          icon="📡"
        />
        <ServiceCard
          title="Internet Solutions"
          desc="High-capacity data ecosystems tailored for corporate scalability and growth."
          icon="🌐"
        />
        <ServiceCard
          title="ICT Infrastructure"
          desc="Full-cycle deployment, installation, and industrial maintenance of hardware."
          icon="🏗️"
        />
      </div>

      {/* Trust & Compliance Feature Card */}
      <div className="relative group overflow-hidden bg-mavics-black rounded-[3rem] p-10 md:p-20 shadow-mavics-glow border border-white/5">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-mavics-orange/10 rounded-full blur-[120px] -mr-48 -mt-48 transition-all group-hover:bg-mavics-orange/20"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-mavics-orange/20 text-mavics-orange px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-mavics-orange/30">
              <span className="animate-pulse w-2 h-2 bg-mavics-orange rounded-full"></span>
              Regulatory Verified
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">
              Operational <span className="text-mavics-orange">Integrity</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              MAVICS Communications Network Ltd. is a registered Nigerian entity. 
              We maintain <span className="text-white font-bold underline decoration-mavics-orange">100% compliance</span> with the Pension Reform Act (PRA) 2014, 
              backed by our <span className="text-mavics-amber font-bold">2025 Certification</span>.
            </p>
          </div>

          <div className="flex gap-6">
            <div className="bg-mavics-gray/50 backdrop-blur-md px-10 py-8 rounded-[2rem] border border-white/10 text-center transform hover:-translate-y-2 transition-transform shadow-xl">
              <span className="block text-mavics-orange font-black text-4xl mb-1 tracking-tighter">2025</span>
              <span className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Certified Status</span>
            </div>
            <div className="bg-mavics-orange px-10 py-8 rounded-[2rem] text-center transform hover:-translate-y-2 transition-transform shadow-mavics-glow">
              <span className="block text-mavics-black font-black text-4xl mb-1 tracking-tighter">PRA</span>
              <span className="text-[10px] text-mavics-black/60 font-black uppercase tracking-[0.2em]">Compliant Firm</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Intelligent Chat System */}
    <ChatBox />
  </div>
);

export default Home;