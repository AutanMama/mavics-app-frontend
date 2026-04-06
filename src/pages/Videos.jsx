import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../services/api';
import VideoCard from '../components/VideoCard';
import { Link } from 'react-router-dom';
import { Play, Crown, Search, Filter } from 'lucide-react';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos().then(({ data }) => {
      setVideos(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-mavics-black min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Hub Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-mavics-orange"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-mavics-orange">Knowledge Base</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
              Video <span className="text-mavics-orange">Library</span>
            </h2>
            <p className="text-gray-500 mt-6 max-w-xl font-medium leading-relaxed">
              Explore our technical showcases, network setup guides, and project highlights from across the continent.
            </p>
          </div>

          <Link 
            to="/premium" 
            className="group flex items-center gap-4 bg-gradient-to-r from-mavics-orange to-mavics-amber px-8 py-4 rounded-2xl shadow-mavics-glow hover:scale-105 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-mavics-black/20 rounded-xl flex items-center justify-center text-mavics-black group-hover:rotate-12 transition-transform">
              <Crown size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-mavics-black/60">Unlock Access</span>
              <span className="text-sm font-black uppercase tracking-tighter text-mavics-black">Go Premium</span>
            </div>
          </Link>
        </div>

        {/* Search & Filter Bar (Visual Only) */}
        <div className="flex flex-wrap gap-4 mb-12">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
            <input 
              type="text" 
              placeholder="Search for guides or projects..." 
              className="w-full bg-mavics-gray border border-white/5 py-4 pl-12 pr-6 rounded-2xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-mavics-orange transition-all"
            />
          </div>
          <button className="flex items-center gap-2 bg-mavics-gray px-6 py-4 rounded-2xl text-white text-xs font-black uppercase tracking-widest border border-white/5 hover:bg-mavics-orange hover:text-mavics-black transition-all">
            <Filter size={16} />
            Filter
          </button>
        </div>

        {/* Video Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="aspect-video bg-mavics-gray rounded-[2rem] animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.length > 0 ? (
              videos.map((v) => (
                <div key={v._id} className="group cursor-pointer">
                   <VideoCard video={v} />
                   {/* Description added outside the card for clean UI */}
                   <div className="mt-4 px-2">
                     <h4 className="text-white font-bold text-sm truncate group-hover:text-mavics-orange transition-colors">
                       {v.title || "Network Showcase"}
                     </h4>
                     <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest font-black italic">
                       {v.category || "General"}
                     </p>
                   </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-mavics-gray rounded-[3rem] border border-dashed border-white/10">
                <Play size={48} className="mx-auto text-gray-700 mb-4" />
                <p className="text-gray-500 font-black uppercase tracking-widest text-xs">No videos found in the archive</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;