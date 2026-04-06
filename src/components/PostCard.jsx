const PostCard = ({ post }) => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition">
    <img
      src={post.image || "https://via.placeholder.com/600x400"}
      className="w-full h-56 object-cover"
      alt=""
    />
    <div className="p-6">
      <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
        {post.category || "General"}
      </span>
      <h3 className="text-2xl font-bold my-3 leading-tight">{post.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.content}</p>
      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <button className="text-blue-600 font-bold hover:underline">
          Read Full Article
        </button>
      </div>
    </div>
  </div>
);
export default PostCard;
