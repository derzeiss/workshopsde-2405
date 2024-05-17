import { useEffect, useState } from 'react';
import { Book } from './Book';
import { fetchBook } from './api';
import { useStateMachine } from '../useStateMachine';

export const useBook = (isbn?: string) => {
  const [book, setBook] = useState<Book>({} as Book);
  const { state, data, next } = useStateMachine();

  useEffect(() => {
    if (!isbn) return;

    next('loading', 'Loading books...');
    fetchBook(isbn)
      .then((book) => {
        next('success');
        setBook(book);
      })
      .catch((err) => {
        next('error', err.message);
        console.error(err);
      });
  }, [isbn, next]);

  return { book, state, data };
};
