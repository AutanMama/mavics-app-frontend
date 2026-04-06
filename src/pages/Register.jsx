import React, { useState } from "react";
import { registerUser } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

const Register = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser(data);
      alert("Registration Successful. Welcome to the Mavics Network.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. This email may already be in use.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-mavics-soft min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Left Side: Brand & Benefits (Visible on Desktop) */}
        <div className="lg:w-1/2 bg-mavics-black p-12 md:p-20 text-white flex flex-col justify-between">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-mavics-orange rounded-xl flex items-center justify-center font-black text-mavics-black shadow-mavics-glow">
                M
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">Mavics</span>
            </Link>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight mb-8">
              Join the <br /> <span className="text-mavics-orange">Infrastructure</span>
            </h2>

            <div className="space-y-6">
              {[
                "Priority Technical Support",
                "Exclusive Network Blueprints",
                "Certified Training Access",
                "Direct Engineering Channel"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="text-mavics-orange group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] italic">
              PRA Certified Entity — Established 2026
            </p>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="lg:w-1/2 p-12 md:p-20">
          <div className="mb-10">
            <h3 className="text-3xl font-black text-mavics-black uppercase tracking-tighter italic">Create Account</h3>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-2">Personal Identification Required</p>
          </div>

          <form onSubmit={handleReg} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Identity</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl text-mavics-black font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-mavics-orange/20 transition-all"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl text-mavics-black font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-mavics-orange/20 transition-all"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Security Access Key</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl text-mavics-black font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-mavics-orange/20 transition-all"
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  value={data.password}
                />
              </div>
            </div>

            {/* Action Button */}
            <button 
              disabled={loading}
              className="group flex items-center justify-center gap-3 w-full bg-mavics-orange hover:bg-mavics-black text-mavics-black hover:text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-mavics-orange/10 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Enroll Now"}
              <ShieldCheck size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
              Already have clearance?{" "}
              <Link to="/login" className="text-mavics-black hover:text-mavics-orange transition-colors underline decoration-mavics-orange decoration-2 underline-offset-4">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;