import React from 'react';
import ChatBox from '../components/ChatBox';
import { MessageSquare, ShieldCheck, Zap, Clock } from 'lucide-react';

const Chat = () => (
  <div className="bg-mavics-soft min-h-screen pt-32 pb-24 px-6 flex items-center justify-center">
    <div className="max-w-4xl w-full">
      
      <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Status & Info */}
        <div className="bg-mavics-black p-12 text-white md:w-2/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mavics-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-mavics-orange"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-mavics-orange">System Online</span>
            </div>
            
            <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none mb-6">
              Technical <br /> Support
            </h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Connect directly with our network engineers for real-time troubleshooting and project guidance.
            </p>
          </div>

          <div className="space-y-4 mt-12">
            <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <Clock size={16} className="text-mavics-orange" />
              <span>Avg. Response: 5 Mins</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <ShieldCheck size={16} className="text-mavics-orange" />
              <span>Secure Channel</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interaction Area */}
        <div className="p-12 md:p-20 md:w-3/5 text-center flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center text-mavics-black mb-8 shadow-inner">
            <MessageSquare size={32} />
          </div>
          
          <h3 className="text-2xl font-black text-mavics-black uppercase tracking-tight mb-4">
            Ready to assist
          </h3>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed">
            Our support team is currently active. Please use the chat bubble in the bottom right corner of your screen to begin.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <Zap size={20} className="text-mavics-orange mx-auto mb-2" />
              <p className="text-[10px] font-black uppercase text-gray-400">Fast Speed</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <ShieldCheck size={20} className="text-mavics-orange mx-auto mb-2" />
              <p className="text-[10px] font-black uppercase text-gray-400">Encrypted</p>
            </div>
          </div>
        </div>

      </div>

      {/* Actual Chat Component */}
      <ChatBox />
    </div>
  </div>
);

export default Chat;