import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 p-6">
    <h1 className="text-xl font-black mb-10 text-blue-400">MAVICS ADMIN</h1>
    <nav className="flex flex-col gap-4 text-sm font-medium">
      <Link to="/admin/dashboard" className="hover:bg-gray-800 p-3 rounded">Dashboard</Link>
      <Link to="/admin/orders" className="hover:bg-gray-800 p-3 rounded">Orders</Link>
      <Link to="/admin/posts" className="hover:bg-gray-800 p-3 rounded">Posts</Link>
      <Link to="/admin/videos" className="hover:bg-gray-800 p-3 rounded">Videos</Link>
      <Link to="/admin/adverts" className="hover:bg-gray-800 p-3 rounded">Adverts</Link>
      <Link to="/admin/messages" className="hover:bg-gray-800 p-3 rounded">Messages</Link>
      <Link to="/" className="mt-20 text-gray-500 border-t border-gray-800 pt-4">Exit Dashboard</Link>
    </nav>
  </div>
);
export default Sidebar;