import { useState, useEffect } from 'react';
import { Book } from './Book';
import { fetchBooks } from './api';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return { books };
};
