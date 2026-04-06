import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import Videos from './pages/Videos';
import PremiumVideos from './pages/PremiumVideos';
import Chat from './pages/Chat';

// Admin
import Sidebar from './admin/components/Sidebar';
import Dashboard from './admin/pages/Dashboard';
import ManageOrders from './admin/pages/ManageOrders';
import ManagePosts from './admin/pages/ManagePosts';
import ManageVideos from './admin/pages/ManageVideos';
import ManageAdverts from './admin/pages/ManageAdverts';
import ManageMessages from './admin/pages/ManageMessages';
import ManageUsers from './admin/pages/ManageUsers';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/*" element={
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 pt-24">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/premium" element={<PremiumVideos />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </div>
            <Footer />
          </div>
        } />

        {/* Admin Routes */}
        <Route path="/admin/*" element={
          <div>
            <Sidebar />
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="orders" element={<ManageOrders />} />
              <Route path="posts" element={<ManagePosts />} />
              <Route path="videos" element={<ManageVideos />} />
              <Route path="adverts" element={<ManageAdverts />} />
              <Route path="messages" element={<ManageMessages />} />
            </Routes>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;