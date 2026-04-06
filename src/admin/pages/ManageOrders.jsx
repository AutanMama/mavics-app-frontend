import { useState, useEffect } from 'react';
import { getAllOrders, updateOrder } from '../../services/adminAPI';

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = () => getAllOrders().then(({ data }) => setOrders(data));

  const complete = async (id) => {
    await updateOrder(id, 'completed');
    load();
  };

  return (
    <div className="ml-64 p-8">
      <h2 className="text-2xl font-bold mb-6">Service Requests</h2>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs font-bold uppercase text-gray-500 border-b">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Service</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o._id} className="border-b text-sm">
                <td className="p-4 font-bold">{o.user?.name}</td>
                <td className="p-4">{o.service}</td>
                <td className="p-4 capitalize">{o.status}</td>
                <td className="p-4">
                  {o.status === 'pending' && <button onClick={() => complete(o._id)} className="bg-green-600 text-white px-3 py-1 rounded text-xs">Complete</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageOrders;