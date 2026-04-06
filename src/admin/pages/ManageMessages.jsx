import { useState, useEffect } from 'react';
import { getAdminMessages } from '../../services/adminAPI';

const ManageMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAdminMessages().then(({ data }) => setMessages(data));
  }, []);

  return (
    <div className="ml-64 p-8">
      <h2 className="text-2xl font-bold mb-6">Customer Inquiries</h2>
      <div className="space-y-4">
        {messages.map(m => (
          <div key={m._id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
            <div className="flex justify-between font-bold mb-2">
              <span>{m.name} ({m.email})</span>
              <span className="text-xs text-gray-400">{new Date(m.createdAt).toLocaleString()}</span>
            </div>
            <p className="text-gray-600">{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ManageMessages;