import { useState } from 'react';
import { videoActions } from '../../services/adminAPI';

const ManageVideos = () => {
  const [v, setV] = useState({ title: '', url: '', isPremium: false });

  const save = async (e) => {
    e.preventDefault();
    await videoActions.add(v);
    alert("Video Added!");
  };

  return (
    <div className="ml-64 p-8">
      <h2 className="text-2xl font-bold mb-6">Manage Library</h2>
      <form onSubmit={save} className="bg-white p-8 rounded-xl shadow space-y-4">
        <input placeholder="Video Title" className="w-full border p-3 rounded" onChange={e => setV({...v, title: e.target.value})} />
        <input placeholder="Video URL (Vimeo/S3)" className="w-full border p-3 rounded" onChange={e => setV({...v, url: e.target.value})} />
        <label className="flex items-center gap-2">
          <input type="checkbox" onChange={e => setV({...v, isPremium: e.target.checked})} /> Premium Content
        </label>
        <button className="bg-blue-600 text-white px-6 py-3 rounded font-bold">Add Video</button>
      </form>
    </div>
  );
};
export default ManageVideos;