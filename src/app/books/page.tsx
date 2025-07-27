'use client';

import { useSearchParams } from 'next/navigation';
import BookList from '@/domains/openLibrary/components/BookList';


export default function BooksPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <main className="p-8">
      <div className="w-full max-w-8xl bg-white rounded-2xl shadow-lg p-10">
        
        <BookList query={query} />
      </div>
    </main>
  )
  
}



