import { useState, useEffect } from 'react';
import { getStats } from '../../services/adminAPI';
import Topbar from '../components/Topbar';

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, orders: 0 });

  useEffect(() => {
    getStats().then(({ data }) => setStats(data));
  }, []);

  return (
    <div className="ml-64 p-8 bg-gray-50 min-h-screen">
      <Topbar title="System Overview" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-gray-400 text-sm font-bold uppercase">Total Users</h3>
          <p className="text-3xl font-black mt-2">{stats.users}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-gray-400 text-sm font-bold uppercase">Pending Orders</h3>
          <p className="text-3xl font-black mt-2 text-blue-600">{stats.orders}</p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;