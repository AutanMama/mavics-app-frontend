const VideoCard = ({ video }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md group">
    <div className="relative">
      <img
        src={video.thumbnail || "https://via.placeholder.com/400x225"}
        className="w-full h-48 object-cover"
        alt={video.title}
      />
      {video.isPremium && (
        <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
          PREMIUM
        </span>
      )}
    </div>
    <div className="p-4">
      <h4 className="font-bold text-gray-800 line-clamp-1">{video.title}</h4>
      <button className="mt-4 w-full bg-blue-100 text-blue-700 py-2 rounded-lg font-bold hover:bg-blue-200 transition">
        Watch Now
      </button>
    </div>
  </div>
);
export default VideoCard;
