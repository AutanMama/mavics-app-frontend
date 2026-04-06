import { useState, useEffect } from 'react';
import API, { initPayment } from '../services/api';
import VideoCard from '../components/VideoCard';

const PremiumVideos = () => {
  const [videos, setVideos] = useState([]);
  const user = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    API.get('/admin/videos').then(({ data }) => setVideos(data.filter(v => v.isPremium)));
  }, []);

  const handleSubscribe = async () => {
    const { data } = await initPayment(5000); // 5000 NGN
    window.location.href = data.data.authorization_url;
  };

  if (!user?.isSubscribed) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Premium Access Required</h2>
        <p className="text-gray-400 mb-8 max-w-md text-center">Get unlimited access to specialized network architecture training and exclusive documentation.</p>
        <button onClick={handleSubscribe} className="bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition">Subscribe for ₦5,000 / month</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h2 className="text-3xl font-bold mb-8">Exclusive Premium Content</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {videos.map(v => <VideoCard key={v._id} video={v} />)}
      </div>
    </div>
  );
};
export default PremiumVideos;