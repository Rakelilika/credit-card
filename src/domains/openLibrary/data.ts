import { Book } from './types';
import { Edition} from './types';


export async function fetchBooks(query: string): Promise<Book[]> {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    if (!res.ok) {
      console.error(`Error al obtener libros: ${res.status} ${res.statusText}`);
      return [];
    }
    const data = await res.json();
    console.log(data)
    if (!data || typeof data !== 'object' || !Array.isArray(data.docs)) {
      return [];
    }
    return data.docs;
  } catch (error) {
    console.error('Error accediendo a libro:', error);
    return [];
  }
}

export async function fetchBookDescription(workKey: string): Promise<string | null> {
  try {
    const res = await fetch(`https://openlibrary.org${workKey}.json`);
    const data = await res.json();
    console.log(data);
    if (typeof data.description === 'string') return data.description;
    if (data.description?.value) return data.description.value;
    return null;
  } catch (error) {
    console.error('Error accediendo a descripcion:', error);
    return null;
  }
}

export async function fetchBookEditions(workKey: string): Promise<Edition[]> {
  try {
    const res = await fetch(`https://openlibrary.org${workKey}/editions.json`);
    const data = await res.json();
    console.log(data);
    if (!Array.isArray(data.entries)) {
      return [];
    }
    return data.entries;
  } catch (error) {
    console.error('Error accediendo a ediciones:', error);
    return [];
  }
}

export async function fetchBestEdition(workKey: string): Promise<Edition | null> {
  try {
    const res = await fetch(`https://openlibrary.org${workKey}/editions.json`);
    const data = await res.json();
    console.log(data);
    if (!Array.isArray(data.entries)) {
      return null;
    }
    const bestEdition = data.entries.find((edition: Edition) =>
      edition.number_of_pages &&
      (edition.isbn_10?.length || edition.isbn_13?.length)
    );
    return bestEdition ?? null;
  } catch (error) {
    console.error('Error accediendo a mejor edicion:', error);
    return null;
  }
}


export async function fetchBookRating(workKey: string): Promise<number | null> {
  try {
    const id = workKey.split('/').pop();
    if (!id) return null;

    const res = await fetch(`https://openlibrary.org/works/${id}/ratings.json`);
    if (!res.ok) {
      console.warn('Rating endpoint not found', res.status);
      return null;
    }

    const data = await res.json();
    console.log('Rating API data:', data);

    if (typeof data?.summary?.average === 'number') {
      return parseFloat(data.summary.average.toFixed(1));
    }

    return null;
  } catch (error) {
    console.error('Error accediendo al rating:', error);
    return null;
  }
}
