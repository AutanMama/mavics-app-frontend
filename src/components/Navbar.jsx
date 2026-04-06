import { Link } from 'react-router-dom';
import { logout } from '../services/auth';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <nav className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold tracking-tighter">MAVICS</Link>
      <div className="hidden md:flex space-x-8 font-medium">
        <Link to="/" className="hover:text-blue-300 transition">Home</Link>
        <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
        <Link to="/videos" className="hover:text-blue-300 transition">Videos</Link>
        <Link to="/blog" className="hover:text-blue-300 transition">Blog</Link>
        <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-sm border-r pr-4 border-blue-700">Hi, {user.name}</span>
            {user.role === 'admin' && <Link to="/admin/dashboard" className="bg-yellow-500 text-black px-3 py-1 rounded text-xs font-bold">ADMIN</Link>}
            <button onClick={logout} className="text-red-400 text-sm hover:underline">Logout</button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition">Login</Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;