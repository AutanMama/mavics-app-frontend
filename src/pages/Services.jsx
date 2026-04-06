import { useState } from 'react';
import { createOrder } from '../services/api';

const Services = () => {
  const [form, setForm] = useState({ service: 'Broadband', details: '' });
  const user = JSON.parse(localStorage.getItem('userInfo'));

  const submit = async (e) => {
    e.preventDefault();
    if(!user) return alert("Please login first");
    await createOrder(form);
    alert("Request submitted successfully!");
  };

  return (
    <div className="py-20 bg-gray-50 px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6">Request a Service</h2>
        <form onSubmit={submit} className="space-y-4">
          <select className="w-full p-3 border rounded" onChange={e => setForm({...form, service: e.target.value})}>
            <option>Broadband Installation</option>
            <option>Security Audit</option>
            <option>Satellite Setup</option>
          </select>
          <textarea placeholder="Tell us about your requirements..." className="w-full p-3 border rounded h-32" onChange={e => setForm({...form, details: e.target.value})}></textarea>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold w-full">Submit Request</button>
        </form>
      </div>
    </div>
  );
};
export default Services;