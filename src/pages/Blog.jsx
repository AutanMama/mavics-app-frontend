import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';
import PostCard from '../components/PostCard';
import { BookOpen, Newspaper, TrendingUp, Calendar } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then(({ data }) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-mavics-soft min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Blog Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-mavics-orange"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-mavics-orange">Industry Intelligence</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-mavics-black uppercase tracking-tighter italic leading-none">
            Mavics <span className="text-gray-400">Insights</span>
          </h2>
          <p className="text-gray-500 mt-6 max-w-2xl font-medium text-lg leading-relaxed">
            Stay updated with the latest in telecommunications, network security, and digital infrastructure trends shaping Nigeria.
          </p>
        </div>

        {/* Featured Post Highlight (Optional if posts > 0) */}
        {!loading && posts.length > 0 && (
          <div className="mb-20 group cursor-pointer relative overflow-hidden rounded-[3rem] bg-mavics-black h-[400px] flex flex-col justify-end p-10 md:p-16 border border-white/5 shadow-2xl">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-mavics-orange/10 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="bg-mavics-orange text-mavics-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                Latest Analysis
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic max-w-3xl group-hover:text-mavics-orange transition-colors">
                {posts[0].title}
              </h3>
              <div className="flex items-center gap-6 mt-8 text-gray-400 font-bold text-xs uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-mavics-orange" />
                  <span>{new Date(posts[0].createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-mavics-orange" />
                  <span>5 Min Read</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map(n => (
              <div key={n} className="h-96 bg-white rounded-[2.5rem] animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.slice(1).map(p => (
              <PostCard key={p._id} post={p} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3.5rem] border border-gray-100 shadow-sm">
            <Newspaper size={48} className="mx-auto text-gray-200 mb-4" />
            <p className="text-gray-400 font-black uppercase tracking-widest text-xs">Our editors are drafting new insights...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;