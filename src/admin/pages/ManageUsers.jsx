import { useState, useEffect } from 'react';
import { getUsers } from '../../services/adminAPI';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className="ml-64 p-8">
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <div className="bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr className="text-xs text-gray-500 uppercase">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id} className="border-t text-sm">
                <td className="p-4 font-medium">{u.name}</td>
                <td className="p-4">{u.email}</td>
                <td className="p-4">
                  {u.isSubscribed ? <span className="text-green-600 font-bold">Premium</span> : "Basic"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageUsers;