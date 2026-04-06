import React, { useState } from "react";
import { sendContact } from "../services/api";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [msg, setMsg] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendContact(msg);
      alert(`Thank you ${msg.name}, your message has been transmitted to our team.`);
      setMsg({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Transmission failed. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-mavics-soft min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-mavics-orange/20 bg-mavics-orange/5 text-mavics-orange text-[10px] font-black tracking-[0.4em] uppercase mb-4">
            Connect With Us
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-mavics-black tracking-tighter uppercase italic">
            Direct <span className="text-mavics-orange">Channels</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Left Side: Contact Info (Industrial Black) */}
          <div className="lg:w-1/3 bg-mavics-black p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-8">Office Details</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-mavics-gray rounded-2xl flex items-center justify-center text-mavics-orange shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-sm font-bold leading-relaxed">123 Business Avenue, Victoria Island, Lagos, Nigeria.</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-mavics-gray rounded-2xl flex items-center justify-center text-mavics-orange shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Hotline</p>
                    <p className="text-sm font-bold">+234 (0) 800 MAVICS</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-mavics-gray rounded-2xl flex items-center justify-center text-mavics-orange shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-sm font-bold">support@mavics.com.ng</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <span className="text-[10px] font-black text-mavics-orange uppercase tracking-[0.2em] italic">
                PRA Certified Entity 2025
              </span>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:w-2/3 p-12 md:p-16">
            <form onSubmit={handleSend} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 border-none text-mavics-black placeholder:text-gray-300 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-mavics-orange/20 transition-all font-bold"
                    onChange={(e) => setMsg({ ...msg, name: e.target.value })}
                    value={msg.name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="your@email.com"
                    className="w-full bg-gray-50 border-none text-mavics-black placeholder:text-gray-300 py-4 px-6 rounded-2xl focus:ring-2 focus:ring-mavics-orange/20 transition-all font-bold"
                    onChange={(e) => setMsg({ ...msg, email: e.target.value })}
                    value={msg.email}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">How can we assist you?</label>
                <textarea 
                  required
                  placeholder="Describe your request or technical needs..." 
                  className="w-full bg-gray-50 border-none text-mavics-black placeholder:text-gray-300 py-4 px-6 rounded-2xl h-48 focus:ring-2 focus:ring-mavics-orange/20 transition-all font-bold resize-none"
                  onChange={(e) => setMsg({ ...msg, message: e.target.value })}
                  value={msg.message}
                ></textarea>
              </div>

              <button 
                disabled={loading}
                className="group flex items-center justify-center gap-3 bg-mavics-orange hover:bg-mavics-black text-mavics-black hover:text-white w-full md:w-fit px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-lg disabled:opacity-50"
              >
                {loading ? 'Transmitting...' : 'Send Message'}
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;