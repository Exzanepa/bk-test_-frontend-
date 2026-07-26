import { useEffect, useState } from 'react';
import api from '../lib/api';
import { Link } from 'react-router-dom';

export default function CollectionsPage() {
  const [collections, setCollections] = useState<any[]>([]);
  const [name, setName] = useState('');

  const load = async () => {
    const res = await api.get('/collections');
    setCollections(res.data);
  };
  useEffect(() => { load(); }, []);

  const create = async () => {
    if (!name.trim()) return;
    await api.post('/collections', { name });
    setName('');
    load();
  };

  const remove = async (id: string) => {
    await api.delete(`/collections/${id}`);
    load();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Collections</h1>
        <Link to="/bookmarks" className="text-sm border px-3 py-1.5 rounded">All Bookmarks</Link>
      </div>

      <div className="flex gap-2 mb-6">
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="New collection name" 
          className="border px-3 py-2 rounded flex-1 text-sm" 
        />
        <button onClick={create} className="bg-black text-white px-4 py-2 rounded text-sm">Create</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {collections.map(c => (
          <div key={c.id} className="border rounded p-3 flex justify-between items-center text-sm">
            <Link to={`/collections/${c.id}`} className="hover:underline">{c.name}</Link>
            <button onClick={() => remove(c.id)} className="text-gray-400 hover:text-red-500 ml-2">x</button>
          </div>
        ))}
      </div>

      {collections.length === 0 && <div className="text-sm text-gray-400 mt-6">No collections yet</div>}
    </div>
  );
}