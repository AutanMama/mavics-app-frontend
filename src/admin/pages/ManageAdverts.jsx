import { useState } from 'react';
import { advertActions } from '../../services/adminAPI';

const ManageAdverts = () => {
  const [ad, setAd] = useState({ title: '', image: '', link: '', placement: 'home' });

  const save = async (e) => {
    e.preventDefault();
    await advertActions.create(ad);
    alert("Advert Live!");
  };

  return (
    <div className="ml-64 p-8">
      <h2 className="text-2xl font-bold mb-6">Campaign Manager</h2>
      <form onSubmit={save} className="bg-white p-8 rounded-xl shadow space-y-4">
        <input placeholder="Ad Title" className="w-full border p-3 rounded" onChange={e => setAd({...ad, title: e.target.value})} />
        <input placeholder="Image URL" className="w-full border p-3 rounded" onChange={e => setAd({...ad, image: e.target.value})} />
        <input placeholder="Link" className="w-full border p-3 rounded" onChange={e => setAd({...ad, link: e.target.value})} />
        <select className="w-full border p-3 rounded" onChange={e => setAd({...ad, placement: e.target.value})}>
          <option value="home">Home Page</option>
          <option value="sidebar">Sidebar</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-3 rounded font-bold">Create Ad</button>
      </form>
    </div>
  );
};
export default ManageAdverts;