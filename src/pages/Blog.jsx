import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';
import PostCard from '../components/PostCard';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h2 className="text-4xl font-black mb-12">Latest Insights</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map(p => <PostCard key={p._id} post={p} />)}
      </div>
    </div>
  );
};
export default Blog;