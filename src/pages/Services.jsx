import React, { useState } from 'react';
import { createOrder } from '../services/api';
// Using professional vector icons instead of emojis
import { 
  Network, 
  Globe, 
  Construction, 
  Settings, 
  MessageSquare, 
  Users 
} from 'lucide-react';

const Services = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    service: 'Network Support', 
    details: '' 
  });
  const [loading, setLoading] = useState(false);

  const coreServices = [
    { title: "Network Support", desc: "Expert help to keep your office systems running smoothly.", icon: <Network size={32} /> },
    { title: "Internet Solutions", desc: "Fast and reliable internet connections for your business.", icon: <Globe size={32} /> },
    { title: "Equipment Setup", desc: "Professional installation of cables, routers, and office hardware.", icon: <Construction size={32} /> },
    { title: "System Maintenance", desc: "Regular check-ups to prevent tech problems before they happen.", icon: <Settings size={32} /> },
    { title: "Digital Tools", desc: "Modern communication apps to keep your team connected.", icon: <MessageSquare size={32} /> },
    { title: "Expert Advice", desc: "Guidance on the best technology for your specific goals.", icon: <Users size={32} /> }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createOrder(form);
      alert(`Message Sent! Thank you ${form.name}, we will call you shortly.`);
      setForm({ name: '', email: '', service: coreServices[0].title, details: '' });
    } catch (err) {
      alert("Something went wrong. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-mavics-soft min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1 rounded-full border border-mavics-orange/20 bg-mavics-orange/5 text-mavics-orange text-[10px] font-black tracking-[0.4em] uppercase mb-4">
            What We Do
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-mavics-black tracking-tighter uppercase italic">
            Our <span className="text-mavics-orange">Services</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl font-medium leading-relaxed">
            We provide the tools and support you need to stay connected and grow your business without the stress of technical issues.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Service Cards */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-mavics-orange/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-mavics-black rounded-2xl flex items-center justify-center text-mavics-orange mb-8 group-hover:bg-mavics-orange group-hover:text-mavics-black transition-all duration-500 shadow-lg">
                  {service.icon}
                </div>
                <h4 className="text-xl font-black text-mavics-black leading-tight uppercase tracking-tight group-hover:text-mavics-orange transition-colors">
                  {service.title}
                </h4>
                <p className="mt-3 text-gray-500 text-sm font-medium leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 w-8 h-[2px] bg-mavics-orange group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/3">
            <div className="bg-mavics-black p-10 rounded-[3rem] shadow-mavics-glow sticky top-32 border border-white/5">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">Get In Touch</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">We respond within minutes</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-mavics-orange uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name"
                    className="w-full bg-mavics-gray border-none text-white py-4 px-5 rounded-2xl focus:ring-1 focus:ring-mavics-orange transition-all"
                    onChange={e => setForm({...form, name: e.target.value})}
                    value={form.name}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-mavics-orange uppercase tracking-widest ml-1">Your Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="example@gmail.com"
                    className="w-full bg-mavics-gray border-none text-white py-4 px-5 rounded-2xl focus:ring-1 focus:ring-mavics-orange transition-all"
                    onChange={e => setForm({...form, email: e.target.value})}
                    value={form.email}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-mavics-orange uppercase tracking-widest ml-1">Service Needed</label>
                  <select 
                    className="w-full bg-mavics-gray border-none text-white py-4 px-5 rounded-2xl focus:ring-1 focus:ring-mavics-orange transition-all cursor-pointer"
                    onChange={e => setForm({...form, service: e.target.value})}
                    value={form.service}
                  >
                    {coreServices.map((s, i) => (
                      <option key={i} value={s.title} className="bg-mavics-gray">{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-mavics-orange uppercase tracking-widest ml-1">How can we help?</label>
                  <textarea 
                    required
                    placeholder="Tell us a bit about what you need..." 
                    className="w-full bg-mavics-gray border-none text-white py-4 px-5 rounded-2xl h-32 focus:ring-1 focus:ring-mavics-orange transition-all resize-none"
                    onChange={e => setForm({...form, details: e.target.value})}
                    value={form.details}
                  ></textarea>
                </div>

                <button 
                  disabled={loading}
                  className="w-full bg-mavics-orange hover:bg-white text-mavics-black font-black py-5 rounded-2xl transition-all duration-300 uppercase tracking-widest text-xs shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;