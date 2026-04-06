import React, { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import { Lock, Mail, Eye, EyeOff, ShieldCheck } from "lucide-react";

const Login = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginUser(creds);
      window.location.href = "/"; // Hard refresh to update Navbar state
    } catch (err) {
      alert("Access Denied: Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-mavics-soft min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        
        {/* Branding Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-mavics-black rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-mavics-glow">
            <ShieldCheck size={32} className="text-mavics-orange" />
          </div>
          <h2 className="text-4xl font-black text-mavics-black uppercase tracking-tighter italic">
            Secure <span className="text-mavics-orange">Access</span>
          </h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">
            Client & Staff Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl text-mavics-black font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-mavics-orange/20 transition-all"
                  onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                  value={creds.email}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                <Link to="/reset" className="text-[10px] font-black text-mavics-orange uppercase tracking-widest hover:underline">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border-none rounded-2xl text-mavics-black font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-mavics-orange/20 transition-all"
                  onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                  value={creds.password}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-mavics-orange transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Action */}
            <button 
              disabled={loading}
              className="w-full bg-mavics-black hover:bg-mavics-orange text-white hover:text-mavics-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-mavics-black/10 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Authorize Login"}
            </button>
          </form>

          {/* Footer of the card */}
          <div className="mt-10 pt-8 border-t border-gray-50 text-center">
            <p className="text-gray-400 text-xs font-medium">
              Don't have an account?{" "}
              <Link to="/register" className="text-mavics-black font-black uppercase tracking-tighter hover:text-mavics-orange transition-colors">
                Register Here
              </Link>
            </p>
          </div>
        </div>

        {/* Security Note */}
        <p className="text-center mt-8 text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] italic">
          Encrypted Connection — PRA Certified 2025
        </p>
      </div>
    </div>
  );
};

export default Login;