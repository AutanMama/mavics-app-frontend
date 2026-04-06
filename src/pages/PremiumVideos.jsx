import React, { useState, useEffect } from 'react';
import API, { initPayment } from '../services/api';
import VideoCard from '../components/VideoCard';
import { Crown, ShieldCheck, Zap, Lock, ArrowRight, PlayCircle } from 'lucide-react';

const PremiumVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if (user?.isSubscribed) {
      API.get('/admin/videos')
        .then(({ data }) => {
          setVideos(data.filter(v => v.isPremium));
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user?.isSubscribed]);

  const handleSubscribe = async () => {
    try {
      const { data } = await initPayment(5000); // 5,000 NGN
      window.location.href = data.data.authorization_url;
    } catch (err) {
      alert("Payment gateway connection failed. Please try again.");
    }
  };

  // --- LOCKED STATE (PAYWALL) ---
  if (!user?.isSubscribed) {
    return (
      <div className="bg-mavics-black min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-mavics-orange/10 border border-mavics-orange/20 mb-6">
              <Crown size={14} className="text-mavics-orange" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-mavics-orange">Elite Membership</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic leading-tight">
              Unlock <span className="text-mavics-orange">Advanced</span> <br /> Technical Training
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Zap />, title: "Full Archive", desc: "Access to 50+ specialized network guides." },
              { icon: <ShieldCheck />, title: "Certifications", desc: "Official MAVICS documentation for your team." },
              { icon: <Lock />, title: "Priority Support", desc: "Direct line to senior infrastructure engineers." }
            ].map((feature, i) => (
              <div key={i} className="bg-mavics-gray p-8 rounded-[2.5rem] border border-white/5 text-center">
                <div className="text-mavics-orange mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-white font-bold uppercase tracking-tight mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-16 text-center shadow-mavics-glow relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-2 bg-mavics-orange"></div>
            
            <h3 className="text-2xl font-black text-mavics-black uppercase tracking-tight mb-4">Mavics Elite Subscription</h3>
            <p className="text-gray-500 font-medium mb-10 max-w-sm mx-auto">Get unlimited access to all premium engineering content and live technical workshops.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-left">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest block">Monthly Access</span>
                <span className="text-4xl font-black text-mavics-black">₦5,000</span>
              </div>
              
              <button 
                onClick={handleSubscribe} 
                className="group flex items-center justify-center gap-4 bg-mavics-orange hover:bg-mavics-black text-mavics-black hover:text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-xl"
              >
                Start Premium Access
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Secure Payment via Paystack/Flutterwave</p>
          </div>
        </div>
      </div>
    );
  }

  // --- UNLOCKED STATE (CONTENT) ---
  return (
    <div className="bg-mavics-soft min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16 border-b border-gray-200 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-2 text-mavics-orange">
              <Crown size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Elite Portal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-mavics-black uppercase tracking-tighter italic">
              Exclusive <span className="text-mavics-orange">Content</span>
            </h2>
          </div>
          <div className="hidden md:block bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Membership Status</p>
            <p className="text-xs font-black text-green-500 uppercase">Active & Valid</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {loading ? (
             [1,2,3].map(n => <div key={n} className="aspect-video bg-gray-200 rounded-[2rem] animate-pulse" />)
          ) : videos.length > 0 ? (
            videos.map(v => <VideoCard key={v._id} video={v} />)
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
              <PlayCircle size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-400 font-black uppercase tracking-widest text-xs">New premium insights are being uploaded...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PremiumVideos;