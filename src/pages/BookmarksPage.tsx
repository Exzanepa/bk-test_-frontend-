import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../lib/api';

export default function BookmarksPage() {
  const { id: collectionId } = useParams();
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');

  const load = async () => {
    const res = await api.get('/bookmarks', { params: { collectionId, search: search || undefined } });
    setBookmarks(res.data);
  };

  useEffect(() => { load(); }, [collectionId, search]);

  const create = async () => {
    if (!url.trim()) return;
    await api.post('/bookmarks', { url, title: title || url, collectionId: collectionId || undefined });
    setUrl(''); setTitle('');
    load();
  };

  const remove = async (id: string) => {
    await api.delete(`/bookmarks/${id}`);
    load();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/collections" className="text-sm text-gray-600 hover:text-black mb-4 inline-block">← Back to Collections</Link>
      
      <h1 className="text-xl font-bold mb-4">{collectionId ? 'Bookmarks in Collection' : 'All Bookmarks'}</h1>

      <div className="mb-4">
        <input 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          placeholder="Search..." 
          className="border px-3 py-2 rounded w-full max-w-sm text-sm"
        />
      </div>

      <div className="flex gap-2 mb-6">
        <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://..." className="border px-3 py-2 rounded flex-1 text-sm" />
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" className="border px-3 py-2 rounded w-40 text-sm" />
        <button onClick={create} className="bg-black text-white px-4 py-2 rounded text-sm">Add</button>
      </div>

      <div className="border rounded divide-y">
        {bookmarks.map(b => (
          <div key={b.id} className="p-3 flex justify-between items-center text-sm">
            <div className="truncate mr-4">
              <a href={b.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                {b.title}
              </a>
              <span className="text-gray-400 ml-2 text-xs">{b.url}</span>
            </div>
            <button onClick={() => remove(b.id)} className="text-gray-400 hover:text-red-500 text-xs">delete</button>
          </div>
        ))}
        {bookmarks.length === 0 && <div className="p-6 text-center text-sm text-gray-400">No bookmarks</div>}
      </div>
    </div>
  );
}