import React from 'react';

const ServiceCard = ({ title, desc, icon }) => (
  <div className="group relative p-10 bg-white rounded-[2.5rem] border border-gray-100 hover:border-mavics-orange/30 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden">
    
    {/* Subtle Brand Background Glow (Visible on Hover) */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-mavics-orange/5 rounded-full blur-3xl group-hover:bg-mavics-orange/15 transition-all duration-500"></div>
    
    <div className="relative z-10">
      {/* Icon Container */}
      <div className="w-16 h-16 bg-mavics-black rounded-2xl flex items-center justify-center text-mavics-orange mb-8 group-hover:scale-110 group-hover:bg-mavics-orange group-hover:text-mavics-black transition-all duration-500 shadow-lg">
        <span className="text-3xl">{icon}</span>
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-black text-mavics-black mb-4 uppercase tracking-tight group-hover:text-mavics-orange transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-500 font-medium leading-relaxed mb-8">
        {desc}
      </p>

      {/* Professional Call to Action */}
      <div className="flex items-center gap-2 text-mavics-black font-black text-xs uppercase tracking-[0.2em] group-hover:text-mavics-orange transition-all">
        <span className="h-[2px] w-6 bg-mavics-orange group-hover:w-10 transition-all"></span>
        View Details
      </div>
    </div>
  </div>
);

export default ServiceCard;