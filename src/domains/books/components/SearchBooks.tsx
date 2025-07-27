'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBooks() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/books?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-2 w-60 flex flex-col gap-3">
      <h2 className="text-base mb-4">Search and add a new book</h2>
    <input
      type="text"
      placeholder="Search books"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 "
    />
    <button
      onClick={handleSearch}
      className="w-full bg-blue-800 text-white font-semibold px-5 py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
    >
      Add a new book
    </button>
  </div>
  );
}

