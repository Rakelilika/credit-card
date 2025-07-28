'use client';

import { useEffect, useState } from 'react';
import { fetchBooks } from '../data';
import { fetchBookDescription, fetchBookEditions, fetchBookRating } from '../data';
import { Book, Description, Edition } from '../types';
import HomeLink from '@/shared/ui/HomeLink';

type Props = {
  query: string;
};

export default function BookList({ query }: Props) {
  const [firstBook, setfirstBook] = useState<Book | null>(null);
  const [editions, setEditions] = useState<Edition[]>([]);
  const [description, setDescription] = useState<string | null>(null);
  const [bestEdition, setBestEdition] = useState<Edition>();
  const [rating, setRating] = useState<any>();

  useEffect(() => {
    if (!query) return;
    const loadBooks = async () => {
      // Obtenemos resultados
      let results = await fetchBooks(query);
      if (!results.length) return;
      // Los procesamos convirtiéndolos a minúsculas
      const queryLower = query.toLowerCase();
      // Intentamos que sea una coincidencia exacta 
      const exactMatch = results.find(book => book.title?.toLowerCase() === queryLower);
      // Si no hay coincidencia exacta, usamos el primer resultado
      const first = exactMatch || results[0];
      setfirstBook(first);
      // Obtenemos ediciones
      let edit = await fetchBookEditions(first.key);
      setEditions(edit);
      let best = edit.find(
        (edition) =>
          edition.number_of_pages &&
          (edition.isbn_10?.length || edition.isbn_13?.length)
      );
      setBestEdition(best);
      // Obtenemos descripción de libro
      let desc = await fetchBookDescription(first.key);
      setDescription(desc);
      // Obtenemos valoración de libro
      let rat = await fetchBookRating(first.key);
      setRating(rat);
    };
    loadBooks();
  }, [query]);

  if (!query) return null;

  return (
    <div className="p-8">
      <HomeLink />
     
      {firstBook && (
        <>
          <h1 className="text-2xl font-bold mb-4">{bestEdition?.title}  {rating && ( <span className="text-orange-500">({rating} de 5)</span>)}</h1>
          {description && (
          <p className="mb-4 ">{description.length > 500 ? `${description.slice(0, 500)}...` : description}</p>
          )}
          <h2 className="text-2xl font-bold mt-4">Editions</h2>
          <ul className="list-disc list-inside mt-4">
            {editions.map((item) => (
              <li key={item.key}>
                <strong>{item.title} : {item.subtitle}</strong> {item.publish_date} by {item.publishers?.join(', ')}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mt-4">Book Detail</h2>
          <p className="font-bold mt-4">El objeto fisico</p>
          <p>Formato: {bestEdition?.physical_format ? bestEdition?.physical_format : 'No disponible'}</p>
          <p>Número de páginas: {bestEdition?.number_of_pages ? bestEdition?.number_of_pages : 'No disponible'}</p>
          <p>Peso: {bestEdition?.weight ? bestEdition?.weight : 'No disponible'}</p>

          <p className="font-bold mt-4">Editions Identifiers</p>
          <p>Open Library: {bestEdition?.key.split('/').pop()}</p>
          <p>MISBN: {bestEdition?.isbn_10 ? `10${bestEdition.isbn_10}` : 'No disponible'}</p>
          <p>ISBN: {bestEdition?.isbn_13 ? `13${bestEdition?.isbn_13 }` : 'No disponible'}</p>
      
          <p className="font-bold mt-4">Work Identifiers</p>
          <p>Work: {firstBook.key.split('/').pop()}</p>

          <div className="flex justify-end">
          <img
            src={`https://covers.openlibrary.org/b/isbn/${bestEdition?.isbn_10}-M.jpg`}
            alt={`Cover of ${bestEdition?.title}`}
            className="w-50 h-70 rounded shadow -mt-70"
          />
        </div>
        </>
      )}
    </div>
  );
}
