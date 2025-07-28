'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBooks() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    // Usamos encode para codificar la query y así evitar errores con caracteres especiales en la URL
    router.push(`/books?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 w-64 flex flex-col gap-3">
      <h2 className="text-base font-bold mb-4">Search and add a new book</h2>
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
