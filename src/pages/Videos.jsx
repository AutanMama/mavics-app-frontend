import { useState, useEffect } from 'react';
import { fetchVideos } from '../services/api';
import VideoCard from '../components/VideoCard';
import { Link } from 'react-router-dom';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos().then(({ data }) => setVideos(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black">Video Library</h2>
          <p className="text-gray-500 mt-2">Technical tutorials and network showcases.</p>
        </div>
        <Link to="/premium" className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold">Go Premium</Link>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {videos.map(v => <VideoCard key={v._id} video={v} />)}
      </div>
    </div>
  );
};
export default Videos;