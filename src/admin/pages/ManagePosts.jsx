import { useState } from 'react';
import { postActions } from '../../services/adminAPI';

const ManagePosts = () => {
  const [form, setForm] = useState({ title: '', content: '', image: '' });

  const create = async (e) => {
    e.preventDefault();
    await postActions.create(form);
    alert("Post Created!");
  };

  return (
    <div className="ml-64 p-8">
      <h2 className="text-2xl font-bold mb-6">Create Blog Post</h2>
      <form onSubmit={create} className="bg-white p-8 rounded-xl shadow space-y-4">
        <input placeholder="Title" className="w-full border p-3 rounded" onChange={e => setForm({...form, title: e.target.value})} />
        <input placeholder="Image URL" className="w-full border p-3 rounded" onChange={e => setForm({...form, image: e.target.value})} />
        <textarea placeholder="Content" className="w-full border p-3 rounded h-40" onChange={e => setForm({...form, content: e.target.value})}></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded font-bold">Publish Post</button>
      </form>
    </div>
  );
};
export default ManagePosts;